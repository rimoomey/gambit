import React from "react";
import NavList from "./components/NavList";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "var(--color--greyscale)",
      }}
    >
      <NavList />
      <Outlet context={{ user, setUser }} />
    </div>
  );
}
