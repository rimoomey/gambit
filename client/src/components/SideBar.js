import UserCard from "./UserCard";
import styled from "styled-components";
import { useState } from "react";

const SideContent = styled.div`
  border: 2px solid pink;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const userInfo = {
  username: "John Doe",
  gamesPlayed: "100",
  gamesWon: "20",
  avatar: "http://placekitten.com/g/150/150",
};

const opponentInfo = {
  username: "Enemy Doe",
  gamesPlayed: "1000",
  gamesWon: "200",
  avatar: "http://placekitten.com/g/150/150",
};

export default function SideBar() {
  const [play, setPlay] = useState(false);

  const isOpponentPresent = () => {
    return play ? (
      <UserCard user={opponentInfo}></UserCard>
    ) : (
      <div
        style={{
          display: "flex",
          height: "300px",
          width: "300px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button style={{ height: "50px" }} onClick={() => setPlay(!play)}>New Game</button>
      </div>
    );
  };

  return (
    <SideContent>
      <UserCard user={userInfo} />
      {isOpponentPresent()}
    </SideContent>
  );
}
