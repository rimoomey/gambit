import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "../App.css";
import styled from "styled-components";

const Board = styled.div`
  box-sizing: border-box;
  border-right: 3px solid var(--color--vivid-red);
  padding-right: 3px;
  width: 75%;
`;

export default function Game({
  game,
  setGame,
  cable,
  user,
  setMoveList,
  white_player,
  black_player,
  setTurnNumber,
}) {
  const updateMoveList = (moves) => {
    const newList = [
      "White: " + white_player.username + ",Black: " + black_player.username,
      ...moves,
    ];
    if (moves[moves.length - 1].color === "w") {
      setTurnNumber(1);
    } else {
      setTurnNumber(0);
    }
    setMoveList(newList);
  };

  const createSubscription = () => {
    cable.subscriptions.create(
      { channel: "GamesChannel", user_id: user.id },
      {
        connected: () => {
          setGame({
            gameInfo: game.gameInfo,
            board: new Chess(),
          });
        },
        received: (data) => {
          const gameCopy = new Chess(data.fen);
          setGame({
            gameInfo: game.gameInfo,
            board: gameCopy,
          });
          updateMoveList(data.moves);
          console.log(game.board.turn());
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
    if (result) {
      fetch(`http://localhost:4000/games/${game.gameInfo.id}/add_move`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fen: gameCopy.fen(),
          to: result.to,
          from: result.from,
          color: result.color,
          piece: result.piece,
        }),
      });
    }
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare) {
    console.log(game.gameInfo)
    console.log(game.board.turn() === "w")
    console.log(user.id === game.gameInfo.white_user_id)
    if (
      (game.board.turn() === "w" &&
        user.id === game.gameInfo.white_user_id) ||
      (game.board.turn() === "b" && user.id === game.gameInfo.black_user_id)
    ) {
      makeAMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // always promote to a queen for example simplicity
      });
    } else {
      toast.error("It's not your turn yet.", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    return false;
  }

  return (
    <Board>
      <Chessboard position={game.board.fen()} onPieceDrop={onDrop} />
    </Board>
  );
}
