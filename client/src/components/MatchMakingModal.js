import styled from "styled-components";
import { toast } from "react-toastify";
import { useState } from "react";

const FloatingNotice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export default function MatchMakingModal({ matchChannel }) {
  const [waiting, setWaiting] = useState(false);

  const handleJoined = () => {
    matchChannel.joined()
    setWaiting(true);
  }

  return (
    <FloatingNotice>
      {waiting ? (
        <div
          style={{
            color: "var(--color--white)",
            margin: "5px",
            fontSize: "1.5vw",
          }}
        >
          Searching for an opponent...
        </div>
      ) : (
        <button
          style={{ width: "20%", fontSize: "1vw" }}
          onClick={() => {
            handleJoined();
            toast.dismiss("matching-making-toast");
          }}
          className="notice-button"
        >
          Play Online
        </button>
      )}
    </FloatingNotice>
  );
}
