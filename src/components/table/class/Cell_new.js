import React, { useState, useContext } from "react";

export default function Cell({ rowIndex, columnIndex, playHandler, state }) {

  function clickHandler() {
    playHandler(rowIndex, columnIndex);
  }

  return (
    <th>
      <button type="button" onClick={clickHandler}>
        {state.board[rowIndex][columnIndex]}
      </button>
    </th>
  );
}
