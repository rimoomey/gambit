import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10vh 7.5vh 7.5vh 20vh 7.5vh 7.5vh 10vh 1fr;
  grid-template-rows: 1fr 1fr 50px 20vh 50px 1fr 1fr;
  background-size: cover;
  position: relative; /* Needed to position the cutout text in the middle of the image */
  width: 100%;
  height: 100%; /* Some height */
`;

const RedDiv = styled.div`
  background-color: var(--color--vivid-red);
  grid-column: 2/5;
  grid-row: 2/4;
  z-index: 1;
`;

const BlueDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  padding: 2vh;
  background-color: var(--color--vivid-cyan-blue);
  grid-column: 6/9;
  grid-row: 5/7;
  z-index: 1;
`;

const GridButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-image: var(--gradient--dark-blush-to-vivid-red);
  grid-column: 4/7;
  grid-row: 5/6;
  z-index: 2;
  max-height: 50%;
`

const TextContainer = styled.div`
  z-index: 2;
  grid-column-start: 3;
  grid-column-end: 8;
  grid-row-start: 3;
  grid-row-end: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  font-size: 4vw;
`;

export default function HomePage() {
  const handleClick = (e) => {
    const variableName = e.target.value;
    const methodName =
      "set" + variableName[0].toUpperCase() + variableName.slice(1);

    const dynamicFunctions = {
      setSignup: setSignup,
      setLogin: setLogin,
    };

    const func = dynamicFunctions[methodName];
    func(true);
  };

  const { user } = useOutletContext();
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <>
      <GridContainer>
        <RedDiv />
        <TextContainer>
          <span>CHESS MATCH?</span>
          <img
            src={`${process.env.PUBLIC_URL}/pieces/Chess_klt45.svg`}
            style={{ height: "7vw" }}
          />
        </TextContainer>
        <GridButtonDiv>
          <button style={{  borderRadius: "5px 0 0 5px"}} value="login" className="main-page-button" onClick={handleClick}>
            sign in
          </button>
          <button style={{  borderRadius: "0px 5px 5px 0"}} value="signup" className="main-page-button" onClick={handleClick}>
            sign up
          </button>
        </GridButtonDiv>
        <BlueDiv />
      </GridContainer>
    </>
  );
}
