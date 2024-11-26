import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  find4Diagonal,
  find4Horizontal,
  find4Vertical,
} from "./utils/logicHelpers";

export interface connect4SliceState {
  winner: number;
  currentPlayer: number;
  secondPlayerPoints: number;
  firstPlayerPoints: number;
  activeGame: boolean;
  board: string[][];
  rows: number;
  columns: number;
  connected: number[];
  hoveredColumn: number | null;
  timer: number;
}

const initialState: connect4SliceState = {
  winner: 0,
  currentPlayer: 0,
  secondPlayerPoints: 0,
  firstPlayerPoints: 0,
  activeGame: false,
  board: Array(6)
    .fill(null)
    .map(() => Array(7).fill("*")),
  rows: 6,
  columns: 7,
  connected: [],
  hoveredColumn: null,
  timer: 30,
};

export const connect4Slice = createSlice({
  name: "connect4",
  initialState,
  reducers: {
    clickColumn: (state, action: PayloadAction<number>) => {
      // Block action if game is over
      if (!state.activeGame) {
        return;
      }

      const columnIndex = action.payload;

      //copy matrix to avoid mutation
      const newBoard = state.board.map((row) => [...row]);

      //find lowest available row in the selected column and replace it with the user value
      for (let row = state.rows - 1; row >= 0; row--) {
        if (newBoard[row][columnIndex] === "*") {
          newBoard[row][columnIndex] = state.currentPlayer === 1 ? "X" : "O";
          state.board = newBoard;

          const has4Indexes =
            find4Horizontal(
              newBoard[row],
              columnIndex,
              state.currentPlayer === 1 ? "X" : "O",
              state.columns,
              row
            ) ||
            find4Vertical(
              columnIndex,
              row,
              state.currentPlayer === 1 ? "X" : "O",
              newBoard,
              state.rows,
              state.columns
            ) ||
            find4Diagonal(
              row,
              columnIndex,
              state.currentPlayer === 1 ? "X" : "O",
              newBoard,
              state.rows,
              state.columns
            );
          state.connected = has4Indexes || [];
          if (has4Indexes) {
            state.winner = state.currentPlayer;
            if (state.winner === 1) {
              state.firstPlayerPoints++;
            } else {
              state.secondPlayerPoints++;
            }
            state.activeGame = false;
          } else {
            state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
          }
          break;
        }
      }
    },
    restartGame: (state) => {
      state.activeGame = true;
      state.currentPlayer = 1;
      state.winner = 0;
      state.board = Array(6)
        .fill(null)
        .map(() => Array(7).fill("*"));
      state.connected = [];
      state.firstPlayerPoints = 0;
      state.secondPlayerPoints = 0;
    },
    setActiveGame: (state, action: PayloadAction<boolean>) => {
      state.activeGame = action.payload;
    },
    startGame: (state) => {
      state.activeGame = true;
      state.currentPlayer = state.winner === 1 ? 2 : 1;
      state.winner = 0;
      state.board = Array(6)
        .fill(null)
        .map(() => Array(7).fill("*"));
      state.connected = [];
    },
    setHoveredColumn: (state, action: PayloadAction<number | null>) => {
      state.hoveredColumn = action.payload;
    },
    setWinner: (state, action: PayloadAction<number>) => {
      if (state.winner) return; // Prevent multiple updates
      state.activeGame = false;
      state.winner = action.payload;
      if (state.winner === 1) {
        state.firstPlayerPoints++;
      } else {
        state.secondPlayerPoints++;
      }
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTimer,
  setWinner,
  setHoveredColumn,
  restartGame,
  startGame,
  clickColumn,
  setActiveGame,
} = connect4Slice.actions;

export default connect4Slice.reducer;
