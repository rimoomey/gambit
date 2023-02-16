import UserCard from "./UserCard";
import ChatBox from "./ChatBox";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import "../App.css";

const SideContent = styled.div`
  box-sizing: border-box;
  min-height: 100%;
  width: 25%;
  padding-left: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default function SideBar({ white, black, moveList }) {
  const { user } = useOutletContext();
  const MessageContainer = () => {
    return (
      <>
        {user.id === white.id ? (
          <UserCard user={black}></UserCard>
        ) : (
          <UserCard user={white}></UserCard>
        )}
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
