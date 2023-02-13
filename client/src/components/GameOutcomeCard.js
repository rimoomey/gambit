import styled from "styled-components";
import DetailsButton from "./DetailsButton";

const OutcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 200px;
  background: white;
  font-size: 1vw;
  padding: 1px;
`;

export default function GameOutcomeCard({listNumber}) {
  return (
    <OutcomeCard>
      <div style={{alignSelf: "flex-start"}}>#{listNumber}</div>
      <img
        src={`${process.env.PUBLIC_URL}/board.svg`}
        alt="game photo"
        style={{ width: "100px" }}
      />
      <div>Outcome: Win</div>
      <div>Opponent: Yonathan</div>
      <DetailsButton>Details</DetailsButton>
    </OutcomeCard>
  );
}
