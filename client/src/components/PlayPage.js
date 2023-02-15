import { useOutletContext } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createConsumer } from "@rails/actioncable";
import { ToastContainer, toast } from "react-toastify";
import GameAndSidebar from "./GameAndSidebar";
import MatchMakingModal from "./MatchMakingModal";
import SignInModal from "./SignInModal";

export const CableContext = React.createContext({
  cable: null,
  setCable: () => {},
});

export default function PlayPage() {
  const [matchStatus, setMatchStatus] = useState("");
  const [gameInfo, setGameInfo] = useState({
    gameData: null,
    whiteUser: null,
    blackUser: null,
  });
  const [cable, setCable] = useState(null);
  const [channel, setChannel] = useState(null);

  const { user, backendURL } = useOutletContext();

  useEffect(() => {
    if (user) {
      toast.dismiss("sign-in-toast");
      if (!cable) {
        setCable(createConsumer(`wss://${backendURL}cable`));
      }
    }
  }, [user]);

  useEffect(() => {
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
              matchMakingChannel.perform("unsubscribed");
            }
          },
          joined: () => {
            matchMakingChannel.perform("joined");
          },
        }
      );
      return matchMakingChannel;
    };
    if (user && cable) {
      const newChannel = createSubscription(cable);
      setChannel(newChannel);
    }
  }, [cable]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const modals = () => {
      if (gameInfo.gameData) {
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
    modals();
  }, [user, cable, matchStatus, gameInfo]); // eslint-disable-line react-hooks/exhaustive-deps

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
    return (
      matchStatus === "joined matchmaking" || matchStatus === "waiting for game"
    );
  };

  return (
    <CableContext.Provider value={{ cable, setCable }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user && gameInfo.gameData ? <GameAndSidebar gameInfo={gameInfo}/> : null}
        <ToastContainer autoClose={false} draggable={false} />
      </div>
    </CableContext.Provider>
  );
}
