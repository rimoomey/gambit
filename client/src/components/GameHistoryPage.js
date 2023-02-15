import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SignInModal from "./SignInModal";
import GameOutcomeCard from "./GameOutcomeCard";
import styled from "styled-components";
import "normalize.css";
import "../App.css";

const PageContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
`;

const CardDiv = styled.div`
  width: 628px;
  gap: 10px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function GameHistoryPage() {
  const { user, backendURL, gameHistory, setGameHistory } = useOutletContext();

  useEffect(() => {
    if (user && !gameHistory.length > 0) {
      fetch(backendURL + `users/${user.id}/games`)
      .then(res => res.json())
      .then(data => setGameHistory(data))
    }
  }, [user]);

  useEffect(() => {
    const displayModal = (modal, id) => {
      toast(modal, {
        toastId: id,
        position: "top-center",
        closeOnClick: false,
        theme: "dark",
        closeButton: false,
      });
    };

    if (!user) {
      displayModal(<SignInModal />, "sign-in-toast");
    } else {
      toast.dismiss("sign-in-toast");
    }
  }, [user]);

  const makeCards = () => {
    return gameHistory.map((game, i) => {
      return <GameOutcomeCard key={game.id} listNumber={i + 1} gameData={game}/>
    })
  }

  return (
    <PageContent className="nested-scroll">
      {user ? (
        <>
          <h2
            style={{
              flex: "0",
              backgroundColor: "white",
              color: "black",
              mixBlendMode: "screen",
            }}
          >
            Game History!
          </h2>
          <div
            style={{
              backgroundImage:
                "var(--gradient--vivid-cyan-blue-to-vivid-purple)",
            }}
          >
            <CardDiv>
              {gameHistory ? makeCards() : null}
            </CardDiv>
          </div>
        </>
      ) : null}
      <ToastContainer autoClose={false} draggable={false} />
    </PageContent>
  );
}
