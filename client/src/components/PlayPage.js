import { Chess } from "chess.js";
import styled from "styled-components";
import "../App.css";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { createConsumer } from "@rails/actioncable";
import GameAndSidebar from "./GameAndSidebar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  background-color: var(--color--greyscale);
  justify-content: center;
  align-items: center;
`;

const FloatingNotice = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color--vivid-red);
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  border-radius: 10px;
  width: 500px;
  height: 500px;
`;

export default function PlayPage() {
  const [matchStatus, setMatchStatus] = useState("");
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
          setMatchStatus("joined MatchMaking");
        },
        received: (data) => {
          if (data.message) {
            setMatchStatus(data.message);
          }

          if (data.game) {
            console.log("fired received");
            setWhite(data.white_user);
            setBlack(data.black_user);
            setGame({
              gameInfo: data.game,
              board: new Chess(),
            });
            setMatchStatus("playing");
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

  return (
    <PageContainer>
      {game.gameInfo ? (
        <GameAndSidebar props={[game, setGame, user, cable, white, black]} />
      ) : (
        <FloatingNotice>
          {matchStatus == "waiting for game" ? (
            <div style={{ color: "white", margin: "5px", fontSize: "1.5vw" }}>
              Searching for an opponent...
            </div>
          ) : (
            <button
              style={{ width: "20%", fontSize: "1vw" }}
              onClick={() => {
                handleJoined();
              }}
              className="notice-button"
            >
              Play Online
            </button>
          )}
        </FloatingNotice>
      )}
    </PageContainer>
  );
}
