import NavList from "./components/NavList";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import SignInModal from "./components/SignInModal";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavList />
      {user ? <Outlet context={[user, setUser]} /> : null }
      <SignInModal user={user} setUser={setUser}/>
    </div>
  );
}
