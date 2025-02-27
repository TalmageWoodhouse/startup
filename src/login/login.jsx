import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export function Login({ setUser }) {
  const [text, setText] = React.useState("");
  const navigate = useNavigate();

  function loginUser() {
    localStorage.setItem("user", text);
    setUser(text);
    navigate("/Play");
  }

  function textChange(e) {
    setText(e.target.value);
  }

  return (
    <main>
      <h1>Login to play</h1>
      <form method="get" action="play.html">
        <div className="form-container">
          <input
            type="text"
            placeholder="your@email.com"
            onChange={textChange}
          />
        </div>
        <div className="form-container">
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button onClick={loginUser} type="submit">
            Login
          </button>
          <button onClick={loginUser} type="submit">
            Create New User
          </button>
        </div>
      </form>
    </main>
  );
}
