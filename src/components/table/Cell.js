import React, { useState, useContext } from "react";
import { GameContext } from "./Table";

export default function Cell({ rowIndex, columnIndex, playHandler }) {
  const currState = useContext(GameContext);
  const [value, setValue] = useState(0);

  function clickHandler() {
    playHandler(rowIndex, columnIndex);
    setValue(currState);
  }

  return (
    <th>
      <button type="button" onClick={clickHandler}>
        {currState.board[rowIndex][columnIndex]}
      </button>
    </th>
  );
}
