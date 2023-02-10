import styled from "styled-components";
import "../App.css";

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40vw 1fr;
  grid-template-rows: 1fr 30vw 1fr;
  background-size: cover;
  position: relative; /* Needed to position the cutout text in the middle of the image */
  width: 100%;
  height: 100%; /* Some height */
`;

const TextContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  font-size: 5vw;
`;

export default function HomePage() {
  return (
    <>
      <ImgContainer>
        <TextContainer>
          <span>wanna play?</span>
          <img
            src={`${process.env.PUBLIC_URL}/pieces/Chess_klt45.svg`}
            style={{ height: "7vw" }}
          />
        </TextContainer>
      </ImgContainer>
    </>
  );
}
