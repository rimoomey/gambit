import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import styled from "styled-components";
import "../App.css";

const FloatingNotice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export default function SignInModal() {
  const { user } = useOutletContext();
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  const handleLogin = (e) => {
    setLogin(true)
  };

  const handleSignup = (e) => {
    setSignup(true)
  };

  if (user) {
    return null;
  } else {
    if (login) {
      return (
        <FloatingNotice>
          <LoginForm />
        </FloatingNotice>
      );
    } else if (signup) {
      return (
        <FloatingNotice>
          <SignUpForm />
        </FloatingNotice>
      );
    } else {
      return (
        <FloatingNotice>
          <div style={{ color: "white", margin: "5px", fontSize: "1.5vw" }}>
            You must be signed in to view this page.
          </div>
          <div>
            <button
              className="notice-button"
              onClick={handleLogin}
            >
              Sign In
            </button>
            <button
              className="notice-button"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </FloatingNotice>
      );
    }
  }
}
