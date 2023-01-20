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

function Table(props) {
  return (
    <div>
      <table>
        <tbody>
          <Row />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
