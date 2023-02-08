import { useState } from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import "../App.css";

const PageContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  background-color: var(--color--greyscale);
  justify-content: center;
  align-items: center;
`;

const FloatingNotice = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color--vivid-red);
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  border-radius: 10px;
  width: 500px;
  height: 500px;
`;

export default function SignInModal({ user, setUser }) {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  const handleClick = (e) => {
    const variableName = e.target.value;
    const methodName =
      "set" + variableName[0].toUpperCase() + variableName.slice(1);
    
    const dynamicFunctions = {
      "setSignup": setSignup,
      "setLogin": setLogin
    }

    const func = dynamicFunctions[methodName];
    func(true)
  };

  if (user) {
    return null;
  } else {
    if (login) {
      return (
        <PageContainer>
          <FloatingNotice>
            <LoginForm user={user} setUser={setUser} />
          </FloatingNotice>
        </PageContainer>
      );
    } else if (signup) {
      return (
        <PageContainer>
          <LoginForm user={user} setUser={setUser} />
        </PageContainer>
      );
    } else {
      return (
        <PageContainer>
          <FloatingNotice>
            <div style={{ color: "white", margin: "5px", fontSize: "1.5vw" }}>
              You must be signed in to view this page!
            </div>
            <div>
              <button value="login" className="notice-button" onClick={handleClick}>
                Sign In
              </button>
              <button value="signup" className="notice-button" onClick={handleClick}>
                Sign Up
              </button>
            </div>
          </FloatingNotice>
        </PageContainer>
      );
    }
  }
}
