import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "../App.css";

const FormTitle = styled.h2`
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  align-self: flex-start;
  margin-bottom: 1vw;
  margin-left: 0.5vw;
  padding: 0.25vw 0.5vw;
`;

export default function LoginForm() {
  const { setUser } = useOutletContext();
  const [errorText, setErrorText] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((user) => {
        setUser(user);
      })
      .catch((res) => {
        setErrorText(res.statusText);
      });
  };

  const errorOutput = () => {
    if (errorText === "Unauthorized") {
      return "We couldn't find an account with that username and password.";
    } else {
      return "Hmm. Something went wrong.";
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        width: "60%",
      }}
    >
      <FormTitle>Login!</FormTitle>
      <form onSubmit={handleLogin} style={{ padding: "0px" }}>
        <div
          style={{
            width: "90%",
            fontSize: "1vw",
            display: "flex",
            flexDirection: "row",
            paddingLeft: ".5vw",
          }}
        >
          <label>username</label>
        </div>
        <input
          className="form-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <div
          style={{
            width: "90%",
            fontSize: "1vw",
            display: "flex",
            flexDirection: "row",
            paddingLeft: ".5vw",
          }}
        >
          <label>password</label>
        </div>
        <input
          className="form-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ marginBottom: "1vw" }}
        />
        <div
          style={{
            width: "90%",
            fontSize: "2vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <input className="notice-button" type="submit" value="submit" />
        </div>
      </form>
      {errorText ? (
        <span
          style={{
            display: "inline-block",
            color: "var(--color--white)",
            marginTop: "3vw",
            fontSize: "1vw",
          }}
        >
          {errorOutput()}
        </span>
      ) : null}
    </div>
  );
}
