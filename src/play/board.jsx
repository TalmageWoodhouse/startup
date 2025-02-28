import React, { useState } from "react";
import "./board.css";

export function Board() {
  const [grid, setGrid] = useState([
    [3, 0, 0, 6], // Column 1
    [0, 3, 6, 0], // Column 2
    [0, 0, 0, 3], // Column 3
    [6, 3, 0, 0], // Column 4
  ]);

  return (
    <div>
      <h1>3072</h1>
      <div className="board">
        {grid.map((columnValues, colIndex) => (
          <div key={colIndex} className="column">
            {columnValues.map((value, rowIndex) => (
              <div key={rowIndex} className="square" data-value={value}>
                {value || ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
