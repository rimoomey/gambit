import UserCard from './UserCard'
import styled from 'styled-components';

const SideContent = styled.div`
  border: 2px solid pink;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function SideBar() {
  return (
    <SideContent>
      <UserCard />
    </SideContent>
  )
}