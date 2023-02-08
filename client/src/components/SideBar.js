import UserCard from "./UserCard";
import ChatBox from "./ChatBox";
import styled from "styled-components";
import "../App.css";

const SideContent = styled.div`
  width: 20%;
  margin: 6px 6px 6px 4px;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default function SideBar({ white, black, sidebarHeight, moveList }) {
  const MessageContainer = () => {
    return (
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
        <ChatBox moveList={moveList} />
      </>
    );
  };

  return (
    <SideContent style={{ height: sidebarHeight, border: '1px solid var(--color--pale-pink)' }}>
      <MessageContainer />
    </SideContent>
  );
}
