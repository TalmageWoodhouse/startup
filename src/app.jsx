import React from "react";
import "./app.css";

import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Login } from "./login/login";
import { Play } from "./play/play";
import { Scores } from "./scores/scores";
import { About } from "./about/about";

export default function App() {
  const [user, setUser] = React.useState(localStorage.getItem("user") || null);
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">3072</div>
            <menu className="navbar-nav">
              <NavLink className="nav-item" to="">
                Login
              </NavLink>
              {authState === AuthState.Authenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="play">
                    Play
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="scores">
                    Scores
                  </NavLink>
                </li>
              )}
              <NavLink className="nav-item" to="about">
                About
              </NavLink>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Login
                setUser={setUser}
                authState={authState}
                onAuthchange={(username, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path="/play" element={<Play user={user} />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Talmage Woodhouse</span>
            <a
              className="github"
              href="https://github.com/TalmageWoodhouse/startup.git"
            >
              Github
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}
