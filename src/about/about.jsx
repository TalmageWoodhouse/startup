import React from "react";
import "./about.css";

export function About() {
  return (
    <main>
      <div className="pic-pitch-container">
        <p className="pitch">
          3072 is played by using the arrow keys to slide the numbers in
          thedirection of your choice. When an arrow it pressed the numbers
          slide as far to that direction as possible. Each time you slide a
          number a new number consisting of 3 or 6 will appear. If 2 of the same
          numbers slide into each other they will combine. The object of the
          game is to get the highest score possible and the game is over when
          the board is full and it is not possible to slide anymore.
        </p>
        <img src="images/numbers.jpg" alt="random" />
        <p className="pitch">
          Do you think you could get your highest number to 3072? Challenge
          yourself with this fun, simple game of strategy and addition!
        </p>

        <div id="quote">
          <p>You miss 100% of the shots you don't take. - Michael Jordan</p>
        </div>
      </div>
    </main>
  );
}
