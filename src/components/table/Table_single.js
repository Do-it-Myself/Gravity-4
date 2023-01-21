import React, { useState } from "react";

const initialState = {
  player1: 1,
  player2: 2,
  currentPlayerIs1: true,
  board: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  gameOver: false,
};

function Table() {
  const [state, setState] = useState(initialState);

  function playHandler(rowIndex, columnIndex) {
    console.log("Table", rowIndex, columnIndex);

    const newState = state;
    if (newState.currentPlayerIs1) {
      newState.board[rowIndex][columnIndex] = 1;
    } else {
      newState.board[rowIndex][columnIndex] = 2;
    }
    newState.currentPlayerIs1 = !state.currentPlayerIs1;

    setState(newState);
  }

  function RowMap(row, r) {
    return <Row row={row} r={r} key={r}/>;
  }

  function Row({row, r}){
    function CellMap(cell, c) {
      function clickHandler() {
      }
      return <Cell key={c}/>;
    }

    return <tr>{row.map(CellMap)}</tr>
  }

  function Cell() {
    <th>{<button type="button">{"hi"}</button>}</th>;
  }

  

  return (
    <div>
      <table>
        <tbody>{state.board.map(RowMap)}</tbody>
      </table>
    </div>
  );
}

export default Table;
