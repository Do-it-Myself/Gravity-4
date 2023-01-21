import React, { useContext } from "react";
import Cell from "./Cell_new";

export default function Row({ rowIndex, playHandler, state }) {
  function CellMap(value, i) {
    return (
      <Cell
        value={value}
        key={i}
        columnIndex={i}
        rowIndex={rowIndex}
        playHandler={playHandler}
        state={state}
      />
    );
  }

  return <tr>{state.board[rowIndex].map(CellMap)}</tr>;
}
