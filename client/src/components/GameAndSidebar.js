import Game from "./Game";
import SideBar from "./SideBar";
import { useState } from "react";
import styled from "styled-components";

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-height: 90%;
  background-color: var(--color--greyscale);
`;

const RowDiv = styled.div`
  box-sizing: border-box;
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 6px solid var(--color--pale-pink);
  border-radius: var(--rounded--corners);
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

export default function GameAndSidebar({ props }) {
  const [turnNumber, setTurnNumber] = useState(0);
  const [game, setGame, user, cable, white_player, black_player] = props;
  const [moveList, setMoveList] = useState([
    "White: " + white_player.username + ",Black: " + black_player.username,
  ]);

  return (
    <ColumnDiv>
      <PlayerTurnDiv>
        <div style={{ width: "80%", display: "flex", justifyContent: "center"}}>
          <span style={{ fontSize: "1.5vh", color: "var(--color--white)" }}>
            {`Current Player Turn: ${
              turnNumber == 0
                ? white_player.username
                : black_player.username
            }`}
          </span>
        </div>
        <div style={{ width: "20%" }}></div>
      </PlayerTurnDiv>
      <RowDiv>
        <Game
          game={game}
          setGame={setGame}
          cable={cable}
          user={user}
          white_player={white_player}
          black_player={black_player}
          setMoveList={setMoveList}
          setTurnNumber={setTurnNumber}
        />
        <SideBar
          white={white_player}
          black={black_player}
          moveList={moveList}
        />
      </RowDiv>
    </ColumnDiv>
  );
}
