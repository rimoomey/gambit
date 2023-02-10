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
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const HomeLayout = styled.div`
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-image: var(--gradient--blush-bordeaux);
`;

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <HomeLayout>
      <NavList />
      <PageContainer>
        <Outlet context={{ user, setUser }} />
      </PageContainer>
    </HomeLayout>
  );
}
