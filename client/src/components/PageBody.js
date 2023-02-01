import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

const Body = styled.div`
  display: flex;
  /* grid-template-columns: 3fr 1fr; */
  flex-direction: row;
  width: 100vw;
  height: 80vh;
`;

export default function PageBody({ cable, messages, setMessages }) {
  const createSubscription = () => {
    cable.subscriptions.create(
      { channel: "MessagesChannel" },
      { received: (message) => handleReceivedMessage(message) }
    );
  };

  const handleReceivedMessage = (message) => {
    const newMessages = [...messages, { content: message.content }]
    setMessages(newMessages);
  };

  useEffect(() => {
    createSubscription();
  }, [messages, setMessages]);

  return (
    <Body>
      <Outlet messages={messages} setMessages={setMessages} cable={cable} />
      <SideBar messages={messages} setMessages={setMessages} cable={cable} />
    </Body>
  );
}
