import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";

export default function DetailsButton({ gameId, gameFen }) {
  const { backendURL } = useOutletContext();

  const makeMoveList = (moves) => {
    return moves.map((move) => {
      return (
        <div>{`${(move.color + move.piece).toUpperCase()}: ${move.to} => ${
          move.from
        }`}</div>
      );
    });
  };

  const displayDetails = () => {
    fetch(`${backendURL}games/${gameId}`).then((res) => {
      if (res.ok) {
        res.json().then((game) => {
          console.log(game);
          toast(
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={`https://fen2image.chessvision.ai/${gameFen}`}
                  alt="game"
                  style={{ width: "200px" }}
                />
              </div>
              <div
                className="nested-scroll"
                style={{
                  flex: "1",
                  padding: "5px",
                  overflowY: "scroll",
                  height: "216px",
                }}
              >
                <h3>Move History</h3>
                {makeMoveList(game.moves)}
              </div>
            </div>,
            { position: "top-center", theme: "dark" }
          );
        });
      }
    });
  };
  return <button onClick={displayDetails}>Details</button>;
}
