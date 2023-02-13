import styled from "styled-components";
import DetailsButton from "./DetailsButton";

const OutcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 200px;
  background: none;
  font-size: 1vw;
  padding: 1px;
  border: 1px solid white;
`;

export default function GameOutcomeCard({ gameData, listNumber }) {
  const gameFen = gameData.fen
    ? gameData.fen
    : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq - 0 1";

  return (
    <OutcomeCard>
      <div style={{ alignSelf: "flex-start" }}>
        #{listNumber}
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{ alignSelf: "flex-start", marginBottom: "2px" }}> Final position: </div>
        <img
          src={`https://fen2image.chessvision.ai/${gameFen}`}
          alt="game"
          style={{ width: "140px" }}
        />
        <div style={{ paddingBottom: "2px" }}>
          {gameData.users[0].username +
            " (w)" + '\u00A0' +
            gameData.users[1].username +
            "(b)"}
        </div>
      </div>
      <DetailsButton>Details</DetailsButton>
    </OutcomeCard>
  );
}
