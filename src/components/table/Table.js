import React, { useReducer } from "react";
import Row from "./Row";

const initialState = {
  player1: 1,
  player2: 2,
  currentPlayer: 1,
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  gameOver: false,
};

function RowMap(row, i) {
  return <Row key={i} row={row} />;
}

function Table(props) {
  return (
    <div>
      <table>
        <tbody>
          {initialState.board.map(RowMap)}</tbody>
      </table>
    </div>
  );
}

export default Table;
