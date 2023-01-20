import React, { useContext } from "react";
import Cell from "./Cell";
import {GameContext} from "./Table"

export default function Row({ rowIndex, playHandler }) {
  const currState = useContext(GameContext).state;

  function CellMap(value, i) {
    return <Cell value={value} key={i} columnIndex={i} rowIndex={rowIndex} playHandler={playHandler} />;
  }

  return <tr>{currState.board[rowIndex].map(CellMap)}</tr>;
}
