import NavList from "./components/NavList";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavList />
      <div style={{backgroundColor: 'var(--color--greyscale)'}}>
        <Outlet />
      </div>
    </div>
  );
}
