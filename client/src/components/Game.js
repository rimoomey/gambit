import { CableContext } from "./PlayPage";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect, useState, useContext } from "react";
import  { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";
import styled from "styled-components";

const Board = styled.div`
  box-sizing: border-box;
  border-right: 3px solid var(--color--vivid-red);
  padding-right: 3px;
  width: 75%;
`;

export default function Game({ gameInfo, setMoveList, setTurnNumber }) {
  const { gameData, whiteUser, blackUser } = gameInfo;
  const { cable } = useContext(CableContext);
  const { user } = useOutletContext();

  //speed up rerendering
  const [game, setGame] = useState({
    gameData: gameData,
    board: null,
  });

  const updateMoveList = (moves) => {
    const newList = [
      "White: " + whiteUser.username + ",Black: " + blackUser.username,
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
            gameData: gameData,
            board: new Chess(),
          });
        },
        received: (data) => {
          const gameBoardCopy = new Chess(data.fen);
          setGame({
            gameData: game.gameData,
            board: gameBoardCopy,
          });
          updateMoveList(data.moves);
        },
      }
    );
  };

  useEffect(() => {
    createSubscription();
  }, []);

  function makeAMove(move) {
    const gameBoardCopy = new Chess(game.board.fen());
    const result = gameBoardCopy.move(move);
    if (result) {
      fetch(`http://localhost:4000/games/${game.gameData.id}/add_move`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fen: gameBoardCopy.fen(),
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
    if (
      (game.board.turn() === "w" && user.id === whiteUser.id) ||
      (game.board.turn() === "b" && user.id === blackUser.id)
    ) {
      makeAMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // always promote to a queen for example simplicity
      });
    } else {
      toast.error("It's not your turn yet.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    return false;
  }

  return (
    <Board>
      { game.board ? <Chessboard position={game.board.fen()} onPieceDrop={onDrop} /> : null }
    </Board>
  );
}
