import Game from "./Game";
import { Chess } from "chess.js";
import styled from "styled-components";
import "../App.css";
import { useOutletContext } from "react-router-dom";
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
  flex: 1 1 0;
  width: 70vw;
  justify-content: center;
  align-items: center;
`;
export default function PlayPage() {
  const [message, setMessage] = useState("");
  const [white, setWhite] = useState({});
  const [black, setBlack] = useState({});

  const [game, setGame] = useState({
    gameInfo: null,
    board: null,
  });
  const [channel, setChannel] = useState(null);
  const [user] = useOutletContext();

  const cable = createConsumer("ws://localhost:4000/cable");

  const createSubscription = (cable) => {
    const matchMakingChannel = cable.subscriptions.create(
      { channel: "MatchMakingChannel", user_id: user.id },
      {
        connected: () => {
          setMessage("joined MatchMaking");
        },
        received: (data) => {
          if (data.message) {
            setMessage(data.message);
          }

          if (data.game) {
            setMessage(
              "Game #" +
                data.game.id +
                " White User ID" +
                data.game.white_user_id +
                " Black User ID" +
                data.game.black_user_id
            );
            setWhite(data.white_user);
            setBlack(data.black_user);
            setGame({
              gameInfo: data.game,
              board: new Chess(),
            });
          }
        },
        joined: () => {
          matchMakingChannel.perform("joined");
        },
      }
    );
    setChannel(matchMakingChannel);
  };

  const handleJoined = () => {
    channel.joined();
  };

  useEffect(() => {
    const cable = createConsumer("ws://localhost:4000/cable");
    createSubscription(cable);
  }, []);

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <PageContent>
      {game.gameInfo ? (
        <GameContainer>
          <Game game={game} setGame={setGame} cable={cable} user={user} />
        </GameContainer>
      ) : null}
      <SideBar
        cable={cable}
        handleJoined={handleJoined}
        white={white}
        black={black}
      />
    </PageContent>
  );
}
