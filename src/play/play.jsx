import React from "react";

import { Players } from "./players";
import { Board } from "./Board";

export function Play(props) {
  return (
    <main className="bg-secondary">
      <Players userName={props.userName} />
      <Board userName={props.userName} />
    </main>
  );
}
