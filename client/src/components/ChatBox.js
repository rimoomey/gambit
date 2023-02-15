import "../App.css";
import "normalize.css";

export default function ChatBox({ moveList }) {
  const isFirstMove = (move, i) => {
    if (moveList.length === 1 || i === moveList.length - 1) {
      const split = move.split(",");
      return (
        <>
          <span key="1" style={{ display: "block" }}>
            Match Start
          </span>
          <span key="2" style={{ display: "block" }}>
            {split[0]}
          </span>
          <span key="3" style={{ display: "block" }}>
            {split[1]}
          </span>
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
          break;
        default:
          color = "";
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
        default:
          piece = "";
      }
      return (
        <span key="4" style={{ display: "inline-block" }}>
          {color + " " + piece + " | " + move.from + " -> " + move.to}
        </span>
      );
    }
  };

  const mapMoves = () => {
    return (
      <div
        className="nested-scroll"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <ul>
          {moveList.length
            ? [...moveList].reverse().map((move, i) => (
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
                    key={i + 1 + Math.random()}
                    style={{
                      margin: "0",
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

  return (
    <>
      <span
        style={{
          padding: "5px",
          fontSize: "1.5vw",
          color: "var(--color--white)",
        }}
      >
        History
      </span>
      <hr
        style={{
          margin: "0",
          borderTop: "1px solid var(--color--white)",
          borderBottom: "none",
          width: "100%",
        }}
      />
      {mapMoves()}
    </>
  );
}
