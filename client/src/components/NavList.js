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
  flex: 2;
  font-weight: 700;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;

`;

const Navigation = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 2vw 30vw 1fr 1fr 1fr 2vw;
  grid-template-rows: 2vh 3vh 2vh;
  height: 100%;
`

export default function NavList({ user }) {

  return (
    <Header>
      <BackgroundStrip>
        <Navigation className="main-nav">
          <HomeLink id="home-link" to="/">
            gambit
          </HomeLink>
            <NavLink className="main-nav-link" to="/play" style={{gridColumnStart:"3", gridColumnEnd:"4"}}>
              play
            </NavLink>
            <NavLink className="main-nav-link" to="/previous-games" style={{gridColumnStart:"4", gridColumnEnd:"5"}}>
              game history
            </NavLink>
            <NavLink className="main-nav-link" to="/account" style={{gridColumnStart:"5", gridColumnEnd:"6"}}>
              {user ? `${user.username}'s page` : "account"}
            </NavLink>
        </Navigation>
      </BackgroundStrip>
    </Header>
  );
}
