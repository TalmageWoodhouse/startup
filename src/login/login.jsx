import React from "react";

export function Login() {
  return (
    <main>
      <h1>Login to play</h1>
      <form method="get" action="play.html">
        <div style="width: coopx; margin: auto; text-align: center">
          <input type="text" placeholder="your@email.com" />
        </div>
        <div style="width: coopx; margin: auto; text-align: center">
          <input type="password" placeholder="password" />
        </div>
        <div style="text-align: center">
          <button type="submit">Login</button>
          <button type="submit">Create</button>
        </div>
      </form>
    </main>
  );
}
