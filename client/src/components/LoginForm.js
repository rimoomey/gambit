import { useOutletContext } from "react-router-dom";
import { useState, useContext } from "react";

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
      return "We couldn't find an account with that username or password.";
    } else {
      return "Hmm. Something went wrong.";
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      username: value,
      password: value,
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "90%", width: "60%" }}>
      <h2>Login!</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
      {errorText ? (
        <span style={{ display: "inline-block", color: "var(--color--white)", marginTop: "3vw", fontSize: "1vw"}}>{errorOutput()}</span>
      ) : null}
    </div>
  );
}
