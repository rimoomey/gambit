import Game from "./Game";
import SideBar from "./SideBar";
import { useState } from "react";

export default function GameAndSidebar({ props }) {
  const [game, setGame, user, cable, white_player, black_player] = props;
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const [moveList, setMoveList] = useState([
    "White: " + white_player.username + ",Black: " + black_player.username,
  ]);
  return (
    <>
      <Game
        game={game}
        setGame={setGame}
        cable={cable}
        user={user}
        setSidebarHeight={setSidebarHeight}
        white_player={white_player}
        black_player={black_player}
        setMoveList={setMoveList}
      />
      <SideBar
        white={white_player}
        black={black_player}
        sidebarHeight={sidebarHeight}
        moveList={moveList}
      />
    </>
  );
}
