import UserCard from "./UserCard";
import ChatBox from "./ChatBox";
import styled from "styled-components";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const SideContent = styled.div`
  border-left: 2px solid var(--color--white);
  width: 20vw;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default function SideBar({ handleJoined, white, black }) {
  const [play, setPlay] = useState(false);

  const isChatOpen = () => {
    return play ? (
      <>
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
          <UserCard user={white}></UserCard>
          <div style={{ fontSize: "1.5vw" }}>VS</div>
          <UserCard user={black}></UserCard>
        </div>
        <ChatBox />
      </>
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
          onClick={() => {
            setPlay(!play);
            handleJoined();
          }}
        >
          Play Online
        </button>
      </div>
    );
  };

  return (
    <SideContent>
      {isChatOpen()}
    </SideContent>
  );
}
