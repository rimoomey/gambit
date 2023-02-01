import UserCard from "./UserCard";
import styled from "styled-components";
import { useState } from "react";
// import { sendUserMessage } from "../features/users/usersApi";

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

export default function SideBar({ messages, setMessages }) {
  const [play, setPlay] = useState(false);
  const [content, setContent] = useState("");

  const handleNewMessage = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/users/${1}/add_message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        message: content,
      }),
    });
    // .then((res) => {
    //   if (res.ok) {
    //     setMessages([...messages, { content: res.json().content }]);
    //   }
    // });
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const mapMessages = () => {
    return messages.map((message, i) => <li key={i}>{message.content}</li>);
  };

  const isOpponentPresent = () => {
    return play ? (
      <>
        <UserCard user={opponentInfo}></UserCard>
        <ul>{mapMessages(messages)}</ul>
      </>
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
        <button style={{ height: "50px" }} onClick={() => setPlay(!play)}>
          New Game
        </button>
      </div>
    );
  };

  return (
    <SideContent>
      <UserCard user={userInfo} />
      {isOpponentPresent()}
      <form onSubmit={handleNewMessage}>
        <input
          name="content"
          value={content}
          onChange={handleContentChange}
          type="text"
        />
        <input type="submit" value="Send message" />
      </form>
    </SideContent>
  );
}
