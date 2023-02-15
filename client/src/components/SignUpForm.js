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

export default function SignUpForm() {
  const { setUser } = useOutletContext();
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${backendURL}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setUser(data);
        }
      });
  };

  const errorOutput = () => {
    if (errors.length > 0) {
      return errors.map((error, i) => {
        return (
          <div
            key={i}
            style={{
              display: "inline-block",
              color: "white",
              fontSize: ".75vw",
            }}
          >
            {error}
          </div>
        );
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const valueName = e.target.name;
    setFormData({ ...formData, [valueName]: value });
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
      <FormTitle>Sign up</FormTitle>
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
          <label>confirm password</label>
        </div>
        <input
          className="form-input"
          type="password"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "20%",
        }}
      >
        {errorOutput()}
      </div>
    </div>
  );
}
