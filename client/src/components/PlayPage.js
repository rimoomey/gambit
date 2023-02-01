import Game from "./Game";
import styled from "styled-components";

const PlayArea = styled.div`
  display: flex;
  border: 2px solid lightblue;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export default function PlayPage() {
  return (
    <PlayArea>
      <Game />
      <h2>Play!</h2>
    </PlayArea>
  );
}
