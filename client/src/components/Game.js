import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";
import styled from "styled-components";

const Board = styled.div`
  border: 4px solid lightblue;
  width: 500px;
  height: 500px;
`;

export default function Game() {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    // const gameCopy = { ...game };
    const gameCopy = new Chess(game.fen());
    console.log(game)
    console.log(gameCopy)
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    return true;
  }

  return (
    <Board>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
    </Board>
  );
}
