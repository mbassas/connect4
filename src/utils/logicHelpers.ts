export const find4Horizontal = (
  row: string[],
  columnIndex: number,
  symbol: string,
  columns: number,
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
    return indexes; // 4 in a row
  }

  return undefined; // No 4 in a row
};

export const find4Vertical = (
  columnIndex: number,
  rowIndex: number,
  symbol: string,
  matrix: string[][],
  rows: number,
  columns: number
) => {
  let count = 1;
  let indexes = [rowIndex * columns + columnIndex];

  // Check upwards
  for (let i = rowIndex - 1; i >= 0 && matrix[i][columnIndex] === symbol; i--) {
    count++;
    indexes.push(i * columns + columnIndex);
  }

  // Check downwards
  for (
    let i = rowIndex + 1;
    i < rows && matrix[i][columnIndex] === symbol;
    i++
  ) {
    count++;
    indexes.push(i * columns + columnIndex);
  }

  if (count >= 4) {
    return indexes; // 4 in a row
  }

  return undefined; // No 4 in a row
};
export const find4Diagonal = (
  rowIndex: number,
  columnIndex: number,
  symbol: string,
  matrix: string[][],
  rows: number,
  columns: number
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
    return indexes; // 4 in a row
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
    return indexes; // 4 in a row
  }

  return undefined; // No 4 in a row
};
