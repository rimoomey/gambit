import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";
import styled from "styled-components";

const Board = styled.div`
  border: 6px solid var(--color--pale-pink);
  border-radius: var(--rounded--corners);
  width: 60vh;
`;

export default function Game({ messages, setMessages, cable }) {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const gameCopy = new Chess(game.fen());
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
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </Board>
  );
}
