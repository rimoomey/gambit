import { useState } from "react";
import "../App.css";
import "normalize.css";

export default function ChatBox({ moveList }) {
  const isFirstMove = (move, i) => {
    if (i === 0) {
      const split = move.split(",");
      return (
        <>
          <span style={{ display: "block" }}>Match Start</span>
          <span style={{ display: "block" }}>{split[0]}</span>
          <span style={{ display: "block" }}>{split[1]}</span>
        </>
      );
    } else {
      var color;
      switch (move.color) {
        case "b":
          color = "Black";
          break;
        case "w":
          color = "White";
      }
      var piece;
      switch (move.piece) {
        case "p":
          piece = "Pawn";
          break;
        case "r":
          piece = "Rook";
          break;
        case "n":
          piece = "Knight";
          break;
        case "b":
          piece = "Bishop";
          break;
        case "q":
          piece = "Queen";
          break;
        case "k":
          piece = "King";
          break;
      }
      return (
        <span style={{ display: "inline-block" }}>
          {color + " " + piece + " " + move.from + " | " + move.to}
        </span>
      );
    }
  };

  const mapMoves = () => {
    return (
      <div
        className="move-list"
        style={{
          width: "100%",
          flex: "10",
          padding: "1vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <span style={{ fontSize: "1.5vw", color: "var(--color--white)" }}>
          History
        </span>
        <hr
          style={{
            borderTop: "1px dotted var(--color--white)",
            borderBottom: "none",
            width: "100%",
          }}
        />
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          {moveList.length
            ? moveList.map((move, i) => (
                <>
                  <li
                    key={i + Math.random()}
                    style={{
                      margin: "5px",
                      fontSize: "1vw",
                      color: "var(--color--white)",
                    }}
                  >
                    {isFirstMove(move, i)}
                  </li>
                  <hr
                    style={{
                      borderTop: "1px dotted var(--color--white)",
                      borderBottom: "none",
                      width: "100%",
                    }}
                  />
                </>
              ))
            : null}
        </ul>
      </div>
    );
  };

  return mapMoves();
}
