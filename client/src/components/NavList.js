import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "normalize.css";
import "../App.css";

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 2vh;
  align-items: center;
  color: var(--color--vivid-red);
  background-color: var(--color--white);
`;

const Logo = styled(NavLink)`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: var(--color--vivid-red);
`;

export default function NavList() {
  return (
    <Header>
      <Navigation>
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
      <Logo id="home-link" to="/">
        gambit
      </Logo>
      <Navigation>
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
    </Header>
  );
}
