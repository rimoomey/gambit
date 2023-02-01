import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function UserCard({ username, gamesPlayed, gamesWon, avatar }) {
  return (
    <Card>
      <img src="http://placekitten.com/g/150/150" alt="John" />
      <h1>John Doe</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <a href="#">
        <i class="fa fa-dribbble"></i>
      </a>
      <a href="#">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="#">
        <i class="fa fa-facebook"></i>
      </a>
      <p>
        <button>Contact</button>
      </p>
    </Card>
  );
}
