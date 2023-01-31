import Cell from "./Cell";
import styled from "styled-components";

const GameBoard = styled.div`
  border: 4px solid lightblue;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(8, 1fr) / repeat(8, 1fr);
`;

export default function Layout({ cells, onClick }) {

  function getColor(i, j) {
    if (i % 2 === 0 && j % 2 === 0) {
      return 'white'
    } else if (i % 2 === 1 && j % 2 === 1) {
      return 'white'
    }

    return 'black'
  }

  return (
    <GameBoard>
      {cells.map((row, i) => {
        return row.map((cell, j) => {
          return <Cell key={i} value={cell} color={getColor(i, j)} onClick={onClick} />;
        })
      })}
    </GameBoard>
  );
}
