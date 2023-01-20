import React from "react";
import Cell from "./Cell";

function CellMap(value, i) {
  return <Cell value={value} key={i} />;
}

export default function Row({ row }) {
  return <tr>{row.map(CellMap)}</tr>;
}
