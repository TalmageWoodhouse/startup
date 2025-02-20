import React from "react";
import "./login.css";

export function Login() {
  return (
    <main>
      <h1>Login to play</h1>
      <form method="get" action="play.html">
        <div className="form-container">
          <input type="text" placeholder="your@email.com" />
        </div>
        <div className="form-container">
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button type="submit">Login</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </main>
  );
}
