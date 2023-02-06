import NavList from "./components/NavList";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState({});

  console.log(user)
  return (
    <div>
      <NavList />
      <div style={{ backgroundColor: "var(--color--greyscale)" }}>
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  );
}
