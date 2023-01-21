import { React, useState, useContext } from "react";
import { GameContext } from "../../pages/home/Home_2";
import "./Board.css";

function Board() {
    const state = useContext(GameContext)[0];
    const setState = useContext(GameContext)[1];
    const cellMatrix = useContext(GameContext)[2];
    const setCellMatrix = useContext(GameContext)[3];
    const playHandler = useContext(GameContext)[4];
    const theme = useContext(GameContext)[5];

  return (
    <div value={state}>
      <div id="connect4" className="board-container">
        <table>
          <tbody>
            <tr className="cell-row">
              <td
                onClick={() => playHandler(0, 0)}
                className="cell-0-0 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[0][0]} ${cellMatrix[0][0]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(0, 1)}
                className="cell-0-1 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[0][1]} ${cellMatrix[0][1]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(0, 2)}
                className="cell-0-2 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[0][2]} ${cellMatrix[0][2]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(0, 3)}
                className="cell-0-3 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[0][3]} ${cellMatrix[0][3]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(0, 4)}
                className="cell-0-4 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[0][4]} ${cellMatrix[0][4]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(0, 5)}
                className="cell-0-5 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[0][5]} ${cellMatrix[0][5]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(0, 6)}
                className="cell-0-6 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[0][6]} ${cellMatrix[0][6]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="cell-row">
              <td
                onClick={() => playHandler(1, 0)}
                className="cell-1-0 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[1][0]} ${cellMatrix[1][0]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(1, 1)}
                className="cell-1-1 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[1][1]} ${cellMatrix[1][1]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(1, 2)}
                className="cell-1-2 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[1][2]} ${cellMatrix[1][2]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(1, 3)}
                className="cell-1-3 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[1][3]} ${cellMatrix[1][3]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(1, 4)}
                className="cell-1-4 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[1][4]} ${cellMatrix[1][4]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(1, 5)}
                className="cell-1-5 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[1][5]} ${cellMatrix[1][5]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(1, 6)}
                className="cell-1-6 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[1][6]} ${cellMatrix[1][6]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="cell-row">
              <td
                onClick={() => playHandler(2, 0)}
                className="cell-2-0 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[2][0]} ${cellMatrix[2][0]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(2, 1)}
                className="cell-2-1 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[2][1]} ${cellMatrix[2][1]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(2, 2)}
                className="cell-2-2 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[2][2]} ${cellMatrix[2][2]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(2, 3)}
                className="cell-2-3 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[2][3]} ${cellMatrix[2][3]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(2, 4)}
                className="cell-2-4 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[2][4]} ${cellMatrix[2][4]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(2, 5)}
                className="cell-2-5 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[2][5]} ${cellMatrix[2][5]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(2, 6)}
                className="cell-2-6 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[2][6]} ${cellMatrix[2][6]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="cell-row">
              <td
                onClick={() => playHandler(3, 0)}
                className="cell-3-0 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[3][0]} ${cellMatrix[3][0]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(3, 1)}
                className="cell-3-1 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[3][1]} ${cellMatrix[3][1]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(3, 2)}
                className="cell-3-2 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[3][2]} ${cellMatrix[3][2]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(3, 3)}
                className="cell-3-3 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[3][3]} ${cellMatrix[3][3]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(3, 4)}
                className="cell-3-4 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[3][4]} ${cellMatrix[3][4]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(3, 5)}
                className="cell-3-5 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[3][5]} ${cellMatrix[3][5]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(3, 6)}
                className="cell-3-6 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[3][6]} ${cellMatrix[3][6]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="cell-row">
              <td
                onClick={() => playHandler(4, 0)}
                className="cell-4-0 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[4][0]} ${cellMatrix[4][0]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(4, 1)}
                className="cell-4-1 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[4][1]} ${cellMatrix[4][1]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(4, 2)}
                className="cell-4-2 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[4][2]} ${cellMatrix[4][2]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(4, 3)}
                className="cell-4-3 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[4][3]} ${cellMatrix[4][3]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(4, 4)}
                className="cell-4-4 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[4][4]} ${cellMatrix[4][4]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(4, 5)}
                className="cell-4-5 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[4][5]} ${cellMatrix[4][5]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(4, 6)}
                className="cell-4-6 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[4][6]} ${cellMatrix[4][6]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="cell-row">
              <td
                onClick={() => playHandler(5, 0)}
                className="cell-5-0 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[5][0]} ${cellMatrix[5][0]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(5, 1)}
                className="cell-5-1 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[5][1]} ${cellMatrix[5][1]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(5, 2)}
                className="cell-5-2 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[5][2]} ${cellMatrix[5][2]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(5, 3)}
                className="cell-5-3 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[5][3]} ${cellMatrix[5][3]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(5, 4)}
                className="cell-5-4 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[5][4]} ${cellMatrix[5][4]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(5, 5)}
                className="cell-5-5 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[5][5]} ${cellMatrix[5][5]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(5, 6)}
                className="cell-5-6 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[5][6]} ${cellMatrix[5][6]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="cell-row">
              <td
                onClick={() => playHandler(6, 0)}
                className="cell-6-0 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[6][0]} ${cellMatrix[6][0]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(6, 1)}
                className="cell-6-1 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[6][1]} ${cellMatrix[6][1]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(6, 2)}
                className="cell-6-2 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[6][2]} ${cellMatrix[6][2]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(6, 3)}
                className="cell-6-3 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[6][3]} ${cellMatrix[6][3]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(6, 4)}
                className="cell-6-4 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[6][4]} ${cellMatrix[6][4]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(6, 5)}
                className="cell-6-5 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[6][5]} ${cellMatrix[6][5]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
              <td
                onClick={() => playHandler(6, 6)}
                className="cell-6-6 selectable"
              >
                <span className="chip-position">
                  <svg viewBox="0 0 100 100" className="animated">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      className={`${cellMatrix[6][6]} ${cellMatrix[6][6]}-${theme}`}
                    />
                  </svg>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Board;
