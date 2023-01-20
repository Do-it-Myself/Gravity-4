import React, { useState, useContext } from "react";
import { GameContext } from "./Table";

export default function Cell({ rowIndex, columnIndex, playHandler }) {
  const currState = useContext(GameContext).state;
  const [value, setValue] = useState(currState.board[rowIndex][columnIndex]);

  function clickHandler() {
    if (currState.currentPlayerIs1) {
      setValue(1);
    } else {
      setValue(2);
    }
    playHandler(rowIndex, columnIndex);

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
