import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import "../App.css";

const FloatingNotice = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color--vivid-red);
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

  const handleClick = (e) => {
    const variableName = e.target.value;
    const methodName =
      "set" + variableName[0].toUpperCase() + variableName.slice(1);

    const dynamicFunctions = {
      setSignup: setSignup,
      setLogin: setLogin,
    };

    const func = dynamicFunctions[methodName];
    func(true);
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
      return <LoginForm />;
    } else {
      return (
        <FloatingNotice>
          <div style={{ color: "white", margin: "5px", fontSize: "1.5vw" }}>
            You must be signed in to view this page!
          </div>
          <div>
            <button
              value="login"
              className="notice-button"
              onClick={handleClick}
            >
              Sign In
            </button>
            <button
              value="signup"
              className="notice-button"
              onClick={handleClick}
            >
              Sign Up
            </button>
          </div>
        </FloatingNotice>
      );
    }
  }
}
