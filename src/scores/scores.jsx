import React from "react";
import "./scores.css";

export function Scores() {
  return (
    <main>
      <table>
        <caption>3072 Highscores</caption>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>tyrell jr</td>
            <td>5000</td>
            <td>Jan 2025</td>
          </tr>
          <tr>
            <td>2</td>
            <td>kai cenat</td>
            <td>2500</td>
            <td>Dec 2024</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Duke Dennis</td>
            <td>2000</td>
            <td>Feb 2025</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
