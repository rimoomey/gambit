import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import "../App.css";

const FloatingNotice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns:
    1fr min(10vh, 10vw) min(7.5vh, 7.5vw) min(7.5vh, 7.5vw) min(20vh, 20vw)
    min(7.5vh, 7.5vw) min(7.5vh, 7.5vw) min(10vh, 10vw) 1fr;
  grid-template-rows: 1fr 1fr min(7vh, 7vw) min(20vh, 20vw) min(7vh, 7vw) 1fr 1fr;
  background-size: cover;
  position: relative; /* Needed to position the cutout text in the middle of the image */
  width: 100%;
  height: 100%; /* Some height */
`;

const RedDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  color: white;
  background-color: var(--color--vivid-red);
  grid-column: 2/5;
  grid-row: 2/4;
  z-index: 1;
`;

const BlueDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 2vh;
  background-color: var(--color--vivid-cyan-blue);
  grid-column: 6/9;
  grid-row: 5/7;
  z-index: 1;
`;

const GridButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 2;
  width: min(20vw, 20vh);
`;

const TextContainer = styled.div`
  z-index: 2;
  grid-column-start: 3;
  grid-column-end: 8;
  grid-row-start: 3;
  grid-row-end: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  font-size: min(8vw, 8vh);
`;

export default function HomePage() {
  const { user } = useOutletContext();

  useEffect(() => {
    if (user) {
      toast.dismiss("sign-in-modal");
      toast.dismiss("sign-up-modal");
    }
  }, [user]);

  const displayModal = (modal, id) => {
    toast(modal, {
      toastId: id,
      position: "top-center",
      closeOnClick: false,
      theme: "dark",
    });
  };

  const handleLogin = () => {
    displayModal(
      <FloatingNotice>
        <LoginForm />
      </FloatingNotice>,
      "sign-in-modal"
    );
  };

  const handleSignUp = () => {
    displayModal(
      <FloatingNotice>
        <SignUpForm />
      </FloatingNotice>,
      "sign-up-modal"
    );
  };

  return (
    <>
      <GridContainer>
        <RedDiv>
          <span>Play online...</span>
        </RedDiv>
        <TextContainer>
          <img
            alt="queen svc"
            src={`${process.env.PUBLIC_URL}/pieces/Chess_klt45.svg`}
            style={{ height: "min(10vw, 10vh)" }}
          />
          <span>gambit chess</span>
          <GridButtonDiv>
            <button
              style={{ borderRadius: "5px 0 0 5px", marginRight: 0 }}
              value="login"
              className="main-page-button"
              onClick={handleLogin}
            >
              sign in
            </button>
            <button
              style={{ borderRadius: "0px 5px 5px 0", marginLeft: 0 }}
              value="signup"
              className="main-page-button"
              onClick={handleSignUp}
            >
              sign up
            </button>
          </GridButtonDiv>
        </TextContainer>
        <BlueDiv>
          <span>... or with friends.</span>
        </BlueDiv>
        <ToastContainer autoClose={false} draggable={false} />
      </GridContainer>
    </>
  );
}
