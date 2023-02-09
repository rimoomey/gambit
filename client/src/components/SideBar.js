import UserCard from "./UserCard";
import ChatBox from "./ChatBox";
import styled from "styled-components";
import "../App.css";

const SideContent = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 25%;
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default function SideBar({ white, black, moveList }) {
  const MessageContainer = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "var(--color--greyscale)",
            alignItems: "center",
          }}
        >
          <UserCard user={white}></UserCard>
          <div
            style={{
              fontSize: "1vw",
              color: "var(--color--white)",
            }}
          >
            VS
          </div>
          <UserCard user={black}></UserCard>
        </div>
        <ChatBox moveList={moveList} />
      </>
    );
  };

  return (
    <SideContent>
      <MessageContainer />
    </SideContent>
  );
}
