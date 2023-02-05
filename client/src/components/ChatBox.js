import { useState } from "react";

export default function ChatBox({ messages }) {
  const [content, setContent] = useState("");
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleNewMessage = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/users/${1}/add_message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        message: content,
      }),
    });
  };

  const mapMessages = (messages) => {
    return (
      <div
        style={{
          width: "100%",
          flex: "10",
        }}
      >
        <div
          style={{
            fontSize: "1.5vw",
            paddingLeft: "5px",
            backgroundColor: "var(--color--white)",
            color: "var(--color--vivid-red)",
          }}
        >
          <span>chat</span>
        </div>
        <div
          style={{
            width: "100%",
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {messages.map((message, i) => (
            <li
              key={i + Math.random()}
              style={{
                margin: "5px",
                height: "1.5vw",
                width: "60%",
                fontSize: "1vw",
                border: "1px solid var(--color--vivid-red)",
                backgroundColor: "white",
              }}
            >
              {message.content}
            </li>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flex: "1 1 0",
        border: "1px solid var(--color--vivid-red)",
      }}
    >
      {mapMessages(messages)}
      <form onSubmit={handleNewMessage}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
            padding: "4px",
            justifyContent: "space-around",
            borderRadius: "var(--rounded--corners)",
            color: "var(--color--vivid-red)",
          }}
        >
          <input
            name="content"
            value={content}
            onChange={handleContentChange}
            type="text"
            style={{ fontSize: "1.5vw", width: "75%" }}
          />
          <button
            style={{ fontSize: "1vw", width: "20%", borderRadius: "7px" }}
            onClick={handleNewMessage}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
