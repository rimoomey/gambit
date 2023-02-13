import { CableContext } from "./PlayPage";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useEffect, useState, useContext } from "react";
import { redirect, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";
import styled from "styled-components";

const Board = styled.div`
  box-sizing: border-box;
  border-right: 3px solid var(--color--vivid-red);
  padding-right: 3px;
  width: 75%;
`;

export default function Game({ gameInfo, setGameOver, setMoveList, setTurnNumber }) {
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

  const gameOutcome = (gameBoard) => {
    let outcome = "";
    if (gameBoard.isDraw()) {
      outcome = "draw";
    } else if (gameBoard.isThreefoldRepetition()) {
      outcome = "threefold repitition";
    } else if (gameBoard.isInsufficientMaterial()) {
      outcome = "winning is impossible";
    } else if (gameBoard.isStalemate()) {
      outcome = "stalemate";
    } else if (gameBoard.isCheckmate()) {
      outcome = "checkmate";
    }
    return outcome;
  };

  const gameWinner = (gameBoard) => {
    let winnerId = -1;
    if (
      gameBoard.isDraw() ||
      gameBoard.isInsufficientMaterial() ||
      gameBoard.isThreefoldRepetition() ||
      gameBoard.isStalemate()
    ) {
      winnerId = 0;
    } else if (gameBoard.isCheckmate()) {
      winnerId = gameBoard.turn() === "w" ? blackUser.id : whiteUser.id;
    }
    return winnerId;
  };

  const handleGameEnd = (gameBoard, gameId) => {
    const outcome = gameOutcome(gameBoard);
    const winnerId = gameWinner(gameBoard);

    fetch(`http://localhost:4000/games/${gameId}/end_game`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        outcome: outcome,
        winner_id: winnerId,
      }),
    });
  };

  useEffect(() => {
    const createSubscription = () => {
      const gameChannel = cable.subscriptions.create(
        { channel: "GamesChannel", user_id: user.id },
        {
          connected: () => {
            setGame({
              gameData: gameData,
              board: new Chess(),
            });
          },
          received: (data) => {
            if (data.outcome && data.winner_username) {
              toast(
                <div
                  style={{
                    width: "200px",
                    fontSize: "3vh",
                    backgroundColor: "white",
                    color: "black",
                    mixBlendMode: "screen",
                    alignSelf: "center",
                    justifySelf: "center",
                  }}
                >
                  <div>Game End! </div>
                  <div>Outcome: {data.outcome}</div>
                  <div>
                    {data.winner_username
                      ? `Winner: ${data.winner_username}`
                      : null}
                  </div>
                  <button onClick={() => setGameOver(true)}>End Game</button>
                </div>,
                {
                  id: "game-outcome-toast",
                  position: toast.POSITION.TOP_CENTER,
                  theme: "light",
                  autoClose: "false",
                  closeOnClick: "false",
                  closeButton: "false"
                }
              );
              gameChannel.perform("unsubscribed");
            } else {
              const gameBoardCopy = new Chess(data.fen);
              setGame({
                gameData: game.gameData,
                board: gameBoardCopy,
              });
              updateMoveList(data.moves);
            }
          },
        }
      );
    };
    createSubscription();
  }, []);

  function makeAMove(move) {
    const gameBoardCopy = new Chess(game.board.fen());
    try {
      const result = gameBoardCopy.move(move);
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
      })
        .then((res) => res.json())
        .then((gameRes) => {
          const gameBoardCopy = new Chess(gameRes.fen);
          if (gameBoardCopy.isGameOver()) {
            handleGameEnd(gameBoardCopy, game.gameData.id);
          }
        });
      return result;
    } catch (error) {
      toast.error(
        <div
          style={{
            width: "200px",
            fontSize: "3vh",
            backgroundColor: "white",
            color: "black",
            mixBlendMode: "screen",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          You can't make that move.
        </div>,
        {
          id: "illegal-move-toast",
          position: toast.POSITION.TOP_CENTER,
          theme: "light",
        }
      );
    }
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
      toast.error(
        <div
          style={{
            width: "200px",
            fontSize: "3vh",
            backgroundColor: "white",
            color: "black",
            mixBlendMode: "screen",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          It's not your turn yet.
        </div>,
        {
          id: "illegal-move-toast",
          position: toast.POSITION.TOP_CENTER,
          theme: "light",
        }
      );
    }
    return false;
  }

  return (
    <Board>
      {game.board ? (
        <Chessboard position={game.board.fen()} onPieceDrop={onDrop} />
      ) : null}
    </Board>
  );
}
