import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SignInModal from "./SignInModal";
import DetailsButton from "./DetailsButton";
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
  const { user } = useOutletContext();

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
              <GameOutcomeCard key="1" listNumber="1"/>
              <GameOutcomeCard key="2" listNumber="2"/>
              <GameOutcomeCard key="3" listNumber="3"/>
              <GameOutcomeCard key="4" listNumber="4"/>
              <GameOutcomeCard key="5" listNumber="5"/>
              <GameOutcomeCard key="6" listNumber="6"/>
              <GameOutcomeCard key="7" listNumber="7"/>
              <GameOutcomeCard key="8" listNumber="8"/>
              <GameOutcomeCard key="9" listNumber="9"/>
            </CardDiv>
          </div>
        </>
      ) : null}
      <ToastContainer autoClose={false} draggable={false} />
    </PageContent>
  );
}
