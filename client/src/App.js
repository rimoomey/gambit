import NavList from "./components/NavList";
import { Outlet } from "react-router-dom";

export default function App() {
  fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username: "rimon",
      password: "rimon",
    }),
  }).then((res) => res.json());
  return (
    <div>
      <NavList />
      <div style={{ backgroundColor: "var(--color--greyscale)" }}>
        <Outlet />
      </div>
    </div>
  );
}
