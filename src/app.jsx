import React from "react";
import "./app.css";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Play } from "./play/play";
import { Scores } from "./scores/scores";
import { About } from "./about/about";

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">
              Simon<sup>&reg;</sup>
            </div>
            <menu className="navbar-nav">
              <Navlink className="nav-item" href="index.html">
                Home
              </Navlink>
              <Navlink className="nav-item" href="play.html">
                Play
              </Navlink>
              <Navlink className="nav-item" href="scores.html">
                Scores
              </Navlink>
              <Navlink className="nav-item" href="about.html">
                About
              </Navlink>
            </menu>
          </nav>
        </header>

        <main>App components go here</main>

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
