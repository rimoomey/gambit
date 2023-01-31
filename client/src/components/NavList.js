import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.span`
  display: flex;
  padding: 15px;
  border: 1px solid blue;
`

const Logo = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`

const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  flex: 3 0 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid blue;
`

export default function NavList() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <Header>
      <Logo>
        <div>Chess Player</div>
      </Logo>
      <Navigation>
        <li>
          <NavLink
            to="/play"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Play
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >Friends</NavLink>
        </li>
        <li>
          <NavLink to="/previous-games" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Game History</NavLink>
        </li>
        <li>
          <NavLink to="/account" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Account</NavLink>
        </li>
        <li>
          <NavLink to="/login" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Login</NavLink>
        </li>
      </Navigation>
    </Header>
  );
}
