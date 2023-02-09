import Game from "./Game";
import SideBar from "./SideBar";
import { useState } from "react";
import styled from "styled-components";

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90vh;
  max-height: 90%;
  background-color: var(--color--greyscale);
`;

const RowDiv = styled.div`
  box-sizing: border-box;
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 3px solid var(--color--vivid-red);
  border-radius: var(--rounded--corners);
  padding: 2px;
`;

const PlayerTurnDiv = styled.div`
  width: 100%;
  height: 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export default function GameAndSidebar({ gameInfo }) {
  const { whiteUser: white, blackUser: black } = gameInfo;
  const whiteUsername = white.username;
  const blackUsername = black.username;
  const [turnNumber, setTurnNumber] = useState(0);
  const [moveList, setMoveList] = useState([
    "White: " + whiteUsername + ",Black: " + blackUsername,
  ]);

  return (
    <ColumnDiv>
      <PlayerTurnDiv>
        <div
          style={{
            paddingRight: "6px",
            width: "75%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.5vh",
              margin: "3px",
              padding: "3px",
              border:
                turnNumber == 0
                  ? "1px solid var(--color--white)"
                  : "1px solid var(--color--greyscale)",
              color:
                turnNumber == 0
                  ? "var(--color--white)"
                  : "var(--color--greyscale)",
              backgroundColor:
                turnNumber == 1
                  ? "var(--color--white)"
                  : "var(--color--greyscale)",
            }}
          >
            {`${turnNumber == 0 ? whiteUsername : blackUsername}'s turn`}
          </span>
        </div>
        <div style={{ paddingLeft: "3px", width: "25%" }}></div>
      </PlayerTurnDiv>
      <RowDiv>
        <Game
          gameInfo={gameInfo}
          setMoveList={setMoveList}
          setTurnNumber={setTurnNumber}
        />
        <SideBar white={white} black={black} moveList={moveList} />
      </RowDiv>
    </ColumnDiv>
  );
}
