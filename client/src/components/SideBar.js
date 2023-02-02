import UserCard from "./UserCard";
import styled from "styled-components";
import { useState } from "react";

const SideContent = styled.div`
  border: 2px solid pink;
  flex: 4 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      <div style={{width: '100%', flex: '10', border: '1px solid lightblue', backgroundColor: '#E0FFFF'}}>
        <div style={{fontSize: '1.5vw', margin: '2px', backgroundColor: 'lightblue'}}>Chat</div>
        <div style={{width: '100%', listStyleType: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {messages.map((message, i) => <li key={i + Math.random()} style={{margin: '5px', height: '1.5vw', width: '60%', fontSize:'1vw', border:'1px solid blue', backgroundColor: 'white'}}>{message.content}</li>)}
        </div>
      </div>
    );
  };

  const isOpponentPresent = () => {
    return play ? (
      <>
        <div style={{fontSize: '1.5vw'}}>VS</div>
        <UserCard user={opponentInfo}></UserCard>
      </>
    ) : null;
  };

  const isChatOpen = () => {
    return play ? (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', flex: '4 1 0'}}>
        {mapMessages()}
        <form onSubmit={handleNewMessage} style={{ display: 'flex', flex: '1 1 0', justifySelf: 'flex-end' }}>
          <input
            name="content"
            value={content}
            onChange={handleContentChange}
            type="text"
            style={{fontSize: '1.5vw', flex: '1 1 0'}}
          />
          <input type="submit" value="Send" style={{fontSize: '1vw', flex: '1 1 0'}}/>
        </form>
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          flex: '1 1 0',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button style={{ fontSize: '1vw' }} onClick={() => setPlay(!play)}>
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
          width: '100%',
          flex: "3 1 0",
          flexDirection: "row",
          // justifyContent: "center",
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
