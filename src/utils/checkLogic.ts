const has4Horizontal = (
  row: string[],
  columnIndex: number,
  symbol: string,
  columns: number,
  setConnected: React.Dispatch<React.SetStateAction<number[]>>,
  rowIndex: number
) => {
  let count = 1; // Start with the current disc
  let indexes = [rowIndex * columns + columnIndex]; // Start with the current disc

  // Check to the right
  for (let i = columnIndex + 1; i < columns && row[i] === symbol; i++) {
    count++;
    indexes.push(rowIndex * columns + i);
  }

  // Check to the left
  for (let i = columnIndex - 1; i >= 0 && row[i] === symbol; i--) {
    count++;
    indexes.push(rowIndex * columns + i);
  }

  if (count >= 4) {
    setConnected(indexes);
  }

  return count >= 4; // Return true if 4 or more consecutive discs are found
};

const has4Vertical = (
  columnIndex: number,
  rowIndex: number,
  symbol: string,
  matrix: string[][],
  rows: number,
  setConnected: React.Dispatch<React.SetStateAction<number[]>>
) => {
  let count = 1;
  let indexes = [rowIndex * rows + columnIndex];

  // Check upwards
  for (let i = rowIndex - 1; i >= 0 && matrix[i][columnIndex] === symbol; i--) {
    count++;
    indexes.push(i * rows + columnIndex);
  }

  // Check downwards
  for (
    let i = rowIndex + 1;
    i < rows && matrix[i][columnIndex] === symbol;
    i++
  ) {
    count++;
    indexes.push(i * rows + columnIndex);
  }

  if (count >= 4) {
    setConnected(indexes);
  }

  return count >= 4;
};
const has4Diagonal = (
  rowIndex: number,
  columnIndex: number,
  symbol: string,
  matrix: string[][],
  rows: number,
  columns: number,
  setConnected: React.Dispatch<React.SetStateAction<number[]>>
) => {
  let count = 1;
  let indexes = [rowIndex * columns + columnIndex];

  // UR
  for (
    let i = rowIndex - 1, j = columnIndex + 1;
    i >= 0 && j < columns && matrix[i][j] === symbol;
    i--, j++
  ) {
    count++;
    indexes.push(i * columns + j);
  }

  // DL
  for (
    let i = rowIndex + 1, j = columnIndex - 1;
    i < rows && j >= 0 && matrix[i][j] === symbol;
    i++, j--
  ) {
    count++;
    indexes.push(i * columns + j);
  }

  if (count >= 4) {
    setConnected(indexes);
    return true;
  }

  //reset count and indexes for Ul/DR checks
  count = 1;
  indexes = [rowIndex * columns + columnIndex];

  // UL
  for (
    let i = rowIndex - 1, j = columnIndex - 1;
    i >= 0 && j >= 0 && matrix[i][j] === symbol;
    i--, j--
  ) {
    count++;
    indexes.push(i * columns + j);
  }

  // DR
  for (
    let i = rowIndex + 1, j = columnIndex + 1;
    i < rows && j < columns && matrix[i][j] === symbol;
    i++, j++
  ) {
    count++;
    indexes.push(i * columns + j);
  }
  if (count >= 4) {
    setConnected(indexes);
  }

  return count >= 4;
};

export const checkForWin = (
  matrix: string[][],
  rowIndex: number,
  columnIndex: number,
  symbol: string,
  rows: number,
  columns: number,
  setConnected: React.Dispatch<React.SetStateAction<number[]>>
) => {
  return (
    has4Horizontal(
      matrix[rowIndex],
      columnIndex,
      symbol,
      columns,
      setConnected,
      rowIndex
    ) ||
    has4Vertical(columnIndex, rowIndex, symbol, matrix, rows, setConnected) ||
    has4Diagonal(
      rowIndex,
      columnIndex,
      symbol,
      matrix,
      rows,
      columns,
      setConnected
    )
  );
};
