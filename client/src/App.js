import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import React from "react";
import NavList from "./components/NavList";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [backendURL, setBackendURL] = useState("http://164.92.86.90:80/");
  const [gameHistory, setGameHistory] = useState([]);

  useEffect(() => {
    fetch(`${backendURL ? backendURL : "http://localhost:4000"}me`, {
      mode: "cors",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <HomeLayout>
      <NavList user={user} setUser={setUser} backendURL={backendURL}/>
      <PageContainer>
        <Outlet context={{ backendURL, user, setUser, gameHistory, setGameHistory }} />
      </PageContainer>
      {/* <iframe src="google3274547d5cfe622f.html"></iframe> */}
    </HomeLayout>
  );
}
