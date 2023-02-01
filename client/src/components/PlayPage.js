import Game from "./Game";
import styled from "styled-components";

const PlayArea = styled.div`
  display: flex;
  border: 2px solid lightblue;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export default function PlayPage({ messages, setMessages, cable }) {
  return (
    <PlayArea>
      <Game messages={messages} setMessages={setMessages} cable={cable}/>
      <h2>Play!</h2>
    </PlayArea>
  );
}
