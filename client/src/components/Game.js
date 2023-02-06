import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Board = styled.div`
  border: 6px solid var(--color--pale-pink);
  border-radius: var(--rounded--corners);
  width: 60vh;
`;

export default function Game({ game, setGame, cable, user }) {
  const createSubscription = () => {
    const gameChannel = cable.subscriptions.create(
      { channel: "GamesChannel", user_id: user.id },
      {
        connected: () => {
          setGame({
            gameInfo: game.gameInfo,
            board: new Chess(),
          });
          console.log("Joined game channel");
        },
        received: (data) => {
          const gameCopy = new Chess(data.fen);
          setGame({
            gameInfo: game.gameInfo,
            board: gameCopy,
          });
        },
      }
    );
  };

  useEffect(() => {
    createSubscription();
  }, []);

  function makeAMove(move) {
    const gameCopy = new Chess(game.board.fen());
    const result = gameCopy.move(move);
    if(result) {
      fetch(`http://localhost:4000/games/${game.gameInfo.id}/add_move`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fen: gameCopy.fen(),
        to: move.to,
        from: move.from,
        color: move.color,
        piece: move.piece,
      }),
    });
    }
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    if (move === null) return false;
    return true;
  }

  return (
    <Board>
      <Chessboard position={game.board.fen()} onPieceDrop={onDrop} />
    </Board>
  );
}
