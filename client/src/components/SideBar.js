import UserCard from "./UserCard";
import ChatBox from "./ChatBox";
import styled from "styled-components";
import { useState } from "react";

const SideContent = styled.div`
  border-left: 2px solid var(--color--white);
  width: 20vw;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: var(--color--cyan-bluish-gray); */
  align-items: center;
`;

const userInfo = {
  username: "John Doe",
  gamesPlayed: "100",
  gamesWon: "20",
  avatar: "http://placekitten.com/g/100/100",
};

const opponentInfo = {
  username: "Enemy Doe",
  gamesPlayed: "1000",
  gamesWon: "200",
  avatar: "http://placekitten.com/g/100/100",
};

export default function SideBar({ messages }) {
  const [play, setPlay] = useState(false);

  const isOpponentPresent = () => {
    return play ? (
      <>
        <div style={{ fontSize: "1.5vw" }}>VS</div>
        <UserCard user={opponentInfo}></UserCard>
      </>
    ) : null;
  };

  const isChatOpen = () => {
    return play ? (
      <ChatBox messages={messages} />
    ) : (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1 1 0",
        }}
      >
        <button
          style={{ width: "20%", fontSize: "1vw" }}
          onClick={() => setPlay(!play)}
        >
          Play Online
        </button>
      </div>
    );
  };

  return (
    <SideContent>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "var(--color--white)",
          alignItems: "center",
        }}
      >
        <UserCard user={userInfo} />
        {isOpponentPresent()}
      </div>
      {isChatOpen()}
    </SideContent>
  );
}
