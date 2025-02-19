import React from "react";
import "./play.css";

export function Play() {
  return (
    <main>
      <menu>
        <div className="container">
          <button>New Game</button>
          <div className="score-container">
            <label for="count">Score</label>
            <p id="score">100</p>
          </div>
          <div className="score-container">
            <label for="count">Highscore</label>
            <p id="score">5000</p>
          </div>
        </div>
      </menu>

      <div className="wrapper">
        <div className="player-updates">
          <div className="players">
            Player:
            <span className="playername">player name</span>
          </div>
          <ul className="notification">
            <li className="playername">Tom started a new game</li>
            <li className="playername">Julia started a new game</li>
            <li className="playername">Tom scored 500</li>
          </ul>
        </div>

        <div className="game-container">
          <title>4x4 SVG Table</title>
          <svg width="260" height="260">
            <rect
              x="0"
              y="0"
              width="260"
              height="260"
              fill="none"
              stroke="black"
              stroke-width="2"
            />

            <rect x="5" y="5" width="60" height="60" fill="lightgray" />
            <rect x="70" y="5" width="60" height="60" fill="lightgray" />
            <rect x="135" y="5" width="60" height="60" fill="lightgray" />
            <rect x="200" y="5" width="60" height="60" fill="lightgray" />

            <rect x="5" y="70" width="60" height="60" fill="lightgray" />
            <rect x="70" y="70" width="60" height="60" fill="lightgray" />
            <rect x="135" y="70" width="60" height="60" fill="lightgray" />
            <rect x="200" y="70" width="60" height="60" fill="lightgray" />

            <rect x="5" y="135" width="60" height="60" fill="lightgray" />
            <rect x="70" y="135" width="60" height="60" fill="lightgray" />
            <rect x="135" y="135" width="60" height="60" fill="lightgray" />
            <rect x="200" y="135" width="60" height="60" fill="lightgray" />

            <rect x="5" y="200" width="60" height="60" fill="lightgray" />
            <rect x="70" y="200" width="60" height="60" fill="lightgray" />
            <rect x="135" y="200" width="60" height="60" fill="lightgray" />
            <rect x="200" y="200" width="60" height="60" fill="lightgray" />

            <text
              x="35"
              y="40"
              font-size="20"
              font-weight="bold"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              3
            </text>
            <text
              x="100"
              y="40"
              font-size="20"
              font-weight="bold"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              3
            </text>
            <text
              x="165"
              y="40"
              font-size="20"
              font-weight="bold"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              6
            </text>
            <text
              x="230"
              y="40"
              font-size="20"
              font-weight="bold"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              6
            </text>
          </svg>
        </div>
      </div>
    </main>
  );
}
