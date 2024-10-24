import { checkForWin } from "./checkLogic";

const resetGame = (
  rows: number,
  columns: number,
  setMatrix: React.Dispatch<React.SetStateAction<string[][]>>,
  setIsUserA: React.Dispatch<React.SetStateAction<boolean>>,
  setConnected: React.Dispatch<React.SetStateAction<number[]>>
) => {
  setMatrix(
    Array(rows)
      .fill(null)
      .map(() => Array(columns).fill("*"))
  );
  setIsUserA(true);
  setConnected([]);
};

const placeItem = (
  matrix: string[][],
  columnIndex: number,
  rows: number,
  columns: number,
  isUserA: boolean,
  setMatrix: React.Dispatch<React.SetStateAction<string[][]>>,
  setIsUserA: React.Dispatch<React.SetStateAction<boolean>>,
  setConnected: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const newMatrix = matrix.map((row) => [...row]); //copy matrix to avoid mutation

  //find lowest available row in the selected column and replace it with the user value
  for (let row = rows - 1; row >= 0; row--) {
    if (newMatrix[row][columnIndex] === "*") {
      newMatrix[row][columnIndex] = isUserA ? "X" : "O";
      setMatrix(newMatrix);

      checkForWin(
        newMatrix,
        row,
        columnIndex,
        isUserA ? "X" : "O",
        rows,
        columns,
        setConnected
      );
      if (
        checkForWin(
          newMatrix,
          row,
          columnIndex,
          isUserA ? "X" : "O",
          rows,
          columns,
          setConnected
        )
      ) {
        window.alert("WINNER + " + (isUserA ? "X" : "O"));
        //resetGame(rows, columns, setMatrix, setIsUserA, setConnected);
      } else {
        setIsUserA(!isUserA);
      }
      break;
    }
  }
};

export default placeItem;
