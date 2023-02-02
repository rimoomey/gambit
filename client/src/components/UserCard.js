import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export default function UserCard({ user }) {
  return (
    <Card>
      <img style={{maxHeight: '10vw', width: 'auto', borderRadius: '50%'}}src={user.avatar} alt="John" />
      <span style={{fontSize: '1.5vw'}}>{user.username}</span>
      <div style={{fontSize: '1vw'}}>Wins: {user.gamesWon}</div>
      <div style={{fontSize: '1vw'}}>Games Played: {user.gamesPlayed}</div>
      <div>
        <button style={{fontSize: '1vw'}}>User Page</button>
      </div>
    </Card>
  );
}
