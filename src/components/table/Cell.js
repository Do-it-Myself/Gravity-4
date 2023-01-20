import React, { useState, useContext } from "react";
import { GameContext } from "./Table";

export default function Cell({ rowIndex, columnIndex, playHandler }) {
  const currState = useContext(GameContext).state;
  const [value, setValue] = useState(currState.board[rowIndex][columnIndex]);

  function clickHandler() {
    playHandler(rowIndex, columnIndex);
    setValue(1);
    console.log(currState.board);
  }

  return (
    <th>
      <button type="button" onClick={clickHandler}>
        {value}
      </button>
    </th>
  );
}
