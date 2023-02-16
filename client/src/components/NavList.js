import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "normalize.css";
import "../App.css";

const BackgroundStrip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  mix-blend-mode: screen;
  padding: 1vw;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  height: 10%;
  width: 100%;
`;

const HomeLink = styled(NavLink)`
  height: 100%;
  flex: 1;
  font-weight: 700;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
`;

const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export default function NavList({ user, setUser, backendURL }) {
  const logout = () => {
    fetch(`http://${backendURL}logout`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
    }).then(setUser(null));
  };

  return (
    <Header>
      <BackgroundStrip>
        <Navigation className="main-nav">
          <HomeLink id="home-link" to="/">
            gambit
          </HomeLink>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", flex: "2"}}>
            <NavLink className="main-nav-link" to="/play">
              play
            </NavLink>
            <NavLink className="main-nav-link" to="/previous-games">
              game history
            </NavLink>
            <NavLink className="main-nav-link" to="/account">
              {user ? `${user.username}'s page` : "account"}
            </NavLink>
            {user ? (
              <button
                className="main-nav-link"
                style={{
                  background: "none",
                }}
                onClick={logout}
              >
                logout
              </button>
            ) : null}
          </div>
        </Navigation>
      </BackgroundStrip>
    </Header>
  );
}
