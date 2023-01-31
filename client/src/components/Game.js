import Layout from "./Layout";
import { useState } from "react"

export default function Game() {

  const handleClick = () => {
    return null;
  };

  const [boardSpaces, setBoardSpaces] = useState(Array(8).fill(Array(8).fill(null)))

  return (
    <>
      <Layout cells={boardSpaces} onClick={handleClick}/>
      <div>
        <p> The winner goes here</p>
      </div>
    </>
  );
}
