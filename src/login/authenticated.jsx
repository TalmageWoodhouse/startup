import React from "react";
import { useNavigate } from "react-router-dom";

import "./authenticated.css";

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userName");
    props.onLogout();
  }

  return (
    <div>
      <div className="playerName">Welcome {props.userName}!</div>
      <button className="button" onClick={() => navigate("/play")}>
        Play
      </button>
      <button className="button" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}
