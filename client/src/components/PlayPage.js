import styled from "styled-components";
import "../App.css";
import { useOutletContext } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { createConsumer } from "@rails/actioncable";
import { ToastContainer, toast } from "react-toastify";
import GameAndSidebar from "./GameAndSidebar";
import MatchMakingModal from "./MatchMakingModal";
import SignInModal from "./SignInModal";

const PageContainer = styled.div`
  height: 90%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const WS_API = "ws://localhost:4000/cable";

export const CableContext = React.createContext({
  cable: null,
  setCable: () => {},
});

export default function PlayPage() {
  const [matchStatus, setMatchStatus] = useState("");
  const [gameInfo, setGameInfo] = useState(null);
  const [cable, setCable] = useState(null);
  const [channel, setChannel] = useState(null);

  const { user } = useOutletContext();

  const createSubscription = (socket) => {
    const matchMakingChannel = socket.subscriptions.create(
      { channel: "MatchMakingChannel", user_id: user.id },
      {
        connected: () => {
          setMatchStatus("joined matchmaking");
        },
        received: (data) => {
          if (data.message) {
            setMatchStatus(data.message);
          }

          if (data.game) {
            setGameInfo({
              gameData: data.game,
              whiteUser: data.white_user,
              blackUser: data.black_user,
            });
            setMatchStatus("playing");
          }
        },
        joined: () => {
          matchMakingChannel.perform("joined");
        },
      }
    );
    return matchMakingChannel;
  };

  useEffect(() => {
    modals();
  }, [user, cable, matchStatus]);

  useEffect(() => {
    if (user) {
      setCable(createConsumer(WS_API));
      toast.dismiss("sign-in-toast");
    }
  }, [user]);

  useEffect(() => {
    if (user && cable) {
      const newChannel = createSubscription(cable);
      setChannel(newChannel);
    }
  }, [cable]);

  const displayModal = (modal, id) => {
    toast(modal, {
      toastId: id,
      position: "top-center",
      closeOnClick: false,
      theme: "dark",
      closeButton: false,
    });
  };

  const isInWaitingRoom = () => {
    console.log(matchStatus);
    return (
      matchStatus === "joined matchmaking" || matchStatus === "waiting for game"
    );
  };

  const modals = () => {
    if (gameInfo) {
      toast.dismiss("matchmaking-toast");
      return;
    } else if (user) {
      if (isInWaitingRoom()) {
        displayModal(
          <MatchMakingModal matchChannel={channel} />,
          "matchmaking-toast"
        );
      }
    } else {
      displayModal(<SignInModal />, "sign-in-toast");
    }
  };

  return (
    <PageContainer>
      <CableContext.Provider value={{ cable, setCable }}>
        <div>
          {gameInfo ? <GameAndSidebar gameInfo={gameInfo} /> : null}
          <ToastContainer autoClose={false} draggable={false} />
        </div>
      </CableContext.Provider>
    </PageContainer>
  );
}
