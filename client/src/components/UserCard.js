import styled from "styled-components";
import "../App.css"

const Card = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color--white);
  margin: 2px;
  padding: 2px;
`

export default function UserCard({ user }) {
  return (
    <Card>
      <img style={{maxHeight: '5vw', width: 'auto', borderRadius: '50%'}}src={user.avatar} alt="John" />
      <span style={{fontSize: '.75vw'}}>{user.username}</span>
      <div style={{fontSize: '.5vw'}}>Wins: {user.gamesWon}</div>
      <div style={{fontSize: '.5vw'}}>Games Played: {user.gamesPlayed}</div>
        <button style={{fontSize: '.5vw'}}>User Page</button>
    </Card>
  );
}
