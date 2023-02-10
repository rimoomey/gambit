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
  width: 100%;
`;

const Header = styled.div`
  justify-self: flex-start;
  height: 10%;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 2vw 1vw;
  color: black;
`;

const HomeLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default function NavList() {
  return (
    <Header>
      <BackgroundStrip>
        <Navigation className="main-nav">
          <li>
            <NavLink className="main-nav-link" to="/play">
              play
            </NavLink>
          </li>
          <li>
            <NavLink className="main-nav-link" to="/friends">
              friends
            </NavLink>
          </li>
        </Navigation>
        <HomeLink id="home-link" to="/home">
          gambit
        </HomeLink>
        <Navigation className="main-nav">
          <li>
            <NavLink className="main-nav-link" to="/previous-games">
              game history
            </NavLink>
          </li>
          <li>
            <NavLink className="main-nav-link" to="/account">
              account
            </NavLink>
          </li>
        </Navigation>
      </BackgroundStrip>
    </Header>
  );
}
