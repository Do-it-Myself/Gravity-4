import React from "react";
import Cell from "./Cell";

export default function Row({ row, rowIndex, playHandler }) {
  if (rowIndex === 6) {
    console.log("Row: ", row);}

  function CellMap(value, i) {
    return <Cell value={value} key={i} columnIndex={i} rowIndex={rowIndex} playHandler={playHandler} />;
  }

  return <tr>{row.map(CellMap)}</tr>;
}
