import UserCard from "./UserCard";
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
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const mapMessages = () => {
    return (
      <div
        style={{
          width: "100%",
          flex: "10",
          // backgroundColor: "var(--color--greyscale)",
          // border: "1px solid var(--color--vivid-red)",
        }}
      >
        <div
          style={{
            fontSize: "1.5vw",
            paddingLeft: "5px",
            backgroundColor: "var(--color--white)",
            // border: "1px solid var(--color--vivid-red)",
            color: "var(--color--vivid-red)",
          }}
        >
          <span>chat</span>
        </div>
        <div
          style={{
            width: "100%",
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {messages.map((message, i) => (
            <li
              key={i + Math.random()}
              style={{
                margin: "5px",
                height: "1.5vw",
                width: "60%",
                fontSize: "1vw",
                border: "1px solid var(--color--vivid-red)",
                backgroundColor: "white",
              }}
            >
              {message.content}
            </li>
          ))}
        </div>
      </div>
    );
  };

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
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0",
          border: "1px solid var(--color--vivid-red)",
        }}
      >
        {mapMessages()}
        <form onSubmit={handleNewMessage}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              listStyleType: "none",
              padding: '4px',
              justifyContent: 'space-around',
              borderRadius: 'var(--rounded--corners)',
              color: "var(--color--vivid-red)",
            }}
          >
            <input
              name="content"
              value={content}
              onChange={handleContentChange}
              type="text"
              style={{ fontSize: "1.5vw", width: "75%"}}
            />
            <button
              style={{ fontSize: "1vw", width: "20%", borderRadius: '7px'}}
              onClick={handleNewMessage}
            >
              Send
            </button>
          </div>
        </form>
      </div>
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
          backgroundColor: 'var(--color--white)',
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
