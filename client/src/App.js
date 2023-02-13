import "normalize.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import React from "react";
import NavList from "./components/NavList";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  height: 88%;
  justify-content: center;
  align-items: center;
`;

const HomeLayout = styled.div`
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background-image: var(--gradient--dark-blush-to-vivid-red);
`;

export default function App() {
  const [user, setUser] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  return (
    <HomeLayout>
      <NavList user={user} />
      <PageContainer>
        <Outlet context={{ user, setUser, gameHistory, setGameHistory }} />
      </PageContainer>
    </HomeLayout>
  );
}
