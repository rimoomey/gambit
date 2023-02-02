import { NavLink } from "react-router-dom";
import styled from "styled-components";
import 'normalize.css'
import '../App.css'

const Header = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  max-width: 100%;
  color: var(--color--vivid-red);
`

const Logo = styled.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
`

const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  flex: 1 1 0;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: var(--color--vivid-red);
`

export default function NavList() {

  return (
    <Header>
      <Logo>
        <div>gambit</div>
      </Logo>
      <div style={{display: 'flex', flexDirection: 'column', flex: '3 1 0'}}>
        <Navigation>
          <li>
            <StyledLink
              to="/play"
              style={{textDecoration: 'none'}}
            >
              Play
            </StyledLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              style={{textDecoration: 'none'}}
            >Friends</NavLink>
          </li>
          <li>
            <NavLink to="/previous-games" style={{textDecoration: 'none'}}>Game History</NavLink>
          </li>
          <li>
            <NavLink to="/account" style={{textDecoration: 'none'}}>Account</NavLink>
          </li>
          <li>
            <NavLink to="/login" style={{textDecoration: 'none'}}>Login</NavLink>
          </li>
        </Navigation>
      </div>
    </Header>
  );
}
