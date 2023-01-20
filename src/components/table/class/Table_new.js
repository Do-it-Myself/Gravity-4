import React, { Component } from "react";
import Row from "./Row_new";

export default class Table_new extends Component {
  constructor() {
    super();
    this.state = {
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

    console.log(this.PlayHandler);
  }

  hi() {}

  PlayHandler(rowIndex, columnIndex) {
    console.log("Table", rowIndex, columnIndex);

    const newState = this.state;
    if (newState.currentPlayerIs1) {
      newState.board[rowIndex][columnIndex] = 1;
    } else {
      newState.board[rowIndex][columnIndex] = 2;
    }
    newState.currentPlayerIs1 = !this.state.currentPlayerIs1;

    this.setState(newState);
  }

  RowMap(row, i) {
    return (
      <Row
        key={i}
        row={row}
        rowIndex={i}
        playHandler={this.hi}
        state={this.state}
      />
    );
  }

  render() {
    return (
      <table>
        <tbody>{this.state.board.map(this.RowMap)}</tbody>
      </table>
    );
  }
}
