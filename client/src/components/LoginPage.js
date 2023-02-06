import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function LoginPage() {
  const [user, setUser] = useOutletContext();
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
      .then((res) => res.json())
      .then((user) => setUser(user));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      username: value,
      password: value,
    });
  };
  return (
    <div style={{ border: "2px solid lightblue", flex: "1" }}>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
      <h2>Login!</h2>
    </div>
  );
}
