import styled from "styled-components";
import "../App.css"

const Card = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid var(--color--light-green-cyan);
  margin: 2px;
  padding: 3px;
`

export default function UserCard({ user }) {
  return (
    <Card>
      <img style={{maxHeight: '5vw', width: 'auto', borderRadius: '50%'}}src={user.avatar} alt="John" />
      <span style={{fontSize: '.75vw'}}>{user.username}</span>
      <div style={{fontSize: '.5vw'}}>Wins: {user.gamesWon}</div>
      <div style={{fontSize: '.5vw'}}>Games Played: {user.gamesPlayed}</div>
      <div>
        <button style={{fontSize: '.5vw'}}>User Page</button>
      </div>
    </Card>
  );
}
