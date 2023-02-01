import styled from "styled-components";

const Card = styled.div`
  border: 2px solid lightblue;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function UserCard({ user }) {
  return (
    <Card>
      <img src={user.avatar} alt="John" />
      <h1 style={{lineHeight: '.2'}}>{user.username}</h1>
      <p style={{lineHeight: '.2'}}>Wins: {user.gamesWon}</p>
      <p style={{lineHeight: '.2'}}>Games Played: {user.gamesPlayed}</p>
      <div>
        <button>User Page</button>
      </div>
    </Card>
  );
}
