import SideBar from "./SideBar"
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  /* grid-template-columns: 3fr 1fr; */
  flex-direction: row;
  width: 100vw;
  height: 80vh;
`

export default function PageBody() {
  return (
    <Body>
      <Outlet />
      <SideBar />
    </Body>
  )
}