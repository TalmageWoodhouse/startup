import React, { useState, useEffect } from "react";
import "./board.css";

export function Board() {
  const [grid, setGrid] = useState(generateInitialGrid()); // initialize grid
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );

  // Handle keydown events for movement
  useEffect(() => {
    function handleKeyDown(event) {
      let newGrid;
      switch (event.key) {
        case "ArrowUp":
          newGrid = moveTiles(grid, "up");
          break;
        case "ArrowDown":
          newGrid = moveTiles(grid, "down");
          break;
        case "ArrowLeft":
          newGrid = moveTiles(grid, "left");
          break;
        case "ArrowRight":
          newGrid = moveTiles(grid, "right");
          break;
        default:
          return;
      }

      if (JSON.stringify(newGrid) !== JSON.stringify(grid)) {
        addNewTile(newGrid, setGrid); // add new tile after movement
        newScore = calculateScore(newGrid);
        setScore(newScore);
        if (newScore > highScore) {
          setHighScore(newScore);
          localStorage.setItem("highScore", newScore); //store highschore
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [grid, score, highScore]);

  function resetGame() {
    setGrid(generateInitialGrid()); //reset the grid
    setScore(0); //reset the score
  }

  return (
    <div className="game-container">
      <h1>3072</h1>
      <div className="score-board">
        <div className="score-box">
          <h2>Score: {score}</h2>
        </div>
        <div className="score-box">
          <h2>High Score: {highScore}</h2>
        </div>
        <button onClick={resetGame} className="new-game-btn">
          New Game
        </button>
      </div>
      <div className="board">
        {grid.map((columnValues, colIndex) => (
          <div key={colIndex} className="column">
            {columnValues.map((value, rowIndex) => (
              <div key={rowIndex} className="square">
                {value || ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Function to generate initial grid
function generateInitialGrid() {
  let grid = Array(4)
    .fill(0)
    .map(() => Array(4).fill(0)); // initialize grid with zeros
  addNewTile(grid);
  addNewTile(grid);
  return grid;
}

// Function to add a new tile
function addNewTile(grid, setGrid) {
  let emptyCells = [];
  grid.forEach((col, c) =>
    col.forEach((num, r) => {
      if (num === 0) emptyCells.push({ c, r });
    })
  );

  if (emptyCells.length === 0) return; // No space left

  let { c, r } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  grid[c][r] = Math.random() < 0.9 ? 3 : 6; // 90% chance for 3, 10% for 6

  if (setGrid !== undefined) {
    setGrid([...grid]); // Update the grid state
  }
}

function shiftAndMerge(line, isForward) {
  let filtered = line.filter((num) => num !== 0); // Remove empty spaces
  if (!isForward) filtered.reverse(); // Handle right/down movements

  for (let i = 0; i < filtered.length - 1; i++) {
    if (filtered[i] === filtered[i + 1]) {
      filtered[i] *= 2; // Merge tiles
      filtered[i + 1] = 0; // Mark merged tile as empty
    }
  }

  filtered = filtered.filter((num) => num !== 0); // Remove zeros from merging
  while (filtered.length < 4) filtered.push(0); // Fill empty spaces

  return isForward ? filtered : filtered.reverse();
}

function moveTiles(grid, direction) {
  let newGrid = [...grid.map((col) => [...col])];

  if (direction === "left" || direction === "right") {
    for (let r = 0; r < 4; r++) {
      let row = newGrid.map((col) => col[r]); // Extract row
      row = shiftAndMerge(row, direction === "left");
      for (let c = 0; c < 4; c++) {
        newGrid[c][r] = row[c];
      }
    }
  } else if (direction === "up" || direction === "down") {
    for (let c = 0; c < 4; c++) {
      let column = newGrid[c]; // Extract column
      column = shiftAndMerge(column, direction === "up");
      newGrid[c] = column;
    }
  }

  return newGrid;
}

function calculateScore(grid) {
  let totalScore = 0;
  grid.forEach((col) => {
    col.forEach((num) => {
      totalScore += num;
    });
  });
  return totalScore;
}
