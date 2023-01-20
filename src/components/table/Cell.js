import React from "react";

export default function Cell({ value, rowIndex, columnIndex, playHandler }) {
  let content = 0;
  if (value === 1) {
    content = 1;
    console.log(rowIndex, columnIndex, 1);
  } else if (value === 2) {
    content = 2;
    console.log(rowIndex, columnIndex, 2);
  }
  
  if (rowIndex === 6) {
    console.log("Cell: ", columnIndex, value);}

  function clickHandler() {
    playHandler(rowIndex, columnIndex);
  }

  return <th><button type="button" onClick={clickHandler}>{content}</button></th>;
}
