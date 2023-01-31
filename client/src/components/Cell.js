import styled from "styled-components"

const Space = styled.div`
  border: 2px solid lightblue;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
`;

export default function Cell({ piece, color, onClick }) {
  return (
    <Space onClick={onClick} style={{background: color}}value={piece}/>
  );
}
