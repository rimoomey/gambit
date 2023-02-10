import styled from "styled-components";
import "../App.css";

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color--greyscale);
  margin: 2px;
  padding: 2px;
  color: var(--color--white);
`;

const Button = styled.div`
  box-sizing: border-box;
  text-decoration: none;
  width: "100%";
  margin: 1vw;
  padding: 0.5vw 1vw;
  background-color: var(--color--greyscale);
  color: var(--color--white);
  border: 1px solid var(--color--white);
  font-size: 1vh;
`;

const Wrapper = styled.div`
  &:hover ${Button} {
    color: var(--color--greyscale);
    border: 1px solid var(--color--greyscale);
    background-color: var(--color--white);
  }
`;

export default function UserCard({ user }) {
  return (
    <Card>
      <span style={{alignSelf: "flex-start"}}>Opponent:</span>
      <img
        style={{
          maxWidth: "60%",
          maxHeight: "auto",
          marginBottom: "1vh",
          border: "2px solid var(--color--white)",
          borderRadius: "50%",
        }}
        src={user.avatar}
        alt="John"
      />
      <span style={{ fontSize: "2vw", color: "var(--color--white)" }}>
        {user.username}
      </span>
      <Wrapper>
        <Button>{user.username}'s page</Button>
      </Wrapper>
    </Card>
  );
}
