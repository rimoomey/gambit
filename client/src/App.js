import NavList from "./components/NavList";
import PageBody from "./components/PageBody";
import { useState } from "react";
import { createConsumer } from "@rails/actioncable";

export default function App() {
  const [messages, setMessages] = useState([]);
  const cable = createConsumer("ws://localhost:4000/cable");
  return (
    <div>
      <NavList />
      <PageBody cable={cable} messages={messages} setMessages={setMessages} />
    </div>
  );
}
