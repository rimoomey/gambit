import Game from "./Game";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { createConsumer } from "@rails/actioncable";
import SideBar from "./SideBar";

const PageContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: 80vh;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid lightblue;
  flex: 10 1 0;
  width: 70vw;
  justify-content: center;
  align-items: center;
`;
export default function PlayPage() {
  const [messages, setMessages] = useState([]);

  const cable = createConsumer("ws://localhost:4000/cable");

  const createSubscription = () => {
    // setMessageSubscription(
    return cable.subscriptions.create(
      { channel: "MessagesChannel" },
      { received: (data) => handleReceivedMessage(data) }
      // )
    );
  };

  const handleReceivedMessage = (data) => {
    setMessages(
      data.map((message) => {
        return {
          content: message.content,
        };
      })
    );
  };

  useEffect(() => {
    const subscription = createSubscription();
  }, [messages, setMessages, cable.subscriptions]);

  // useEffect(() => {
  //   console.log(cable);
  // }, []);

  return (
    <PageContent>
      <GameContainer>
        <Game messages={messages} setMessages={setMessages} cable={cable} />
      </GameContainer>
      <SideBar messages={messages} setMessages={setMessages} cable={cable} />
    </PageContent>
  );
}
