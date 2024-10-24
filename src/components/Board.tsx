import styled from "styled-components";
import largeLayerBlack from "../assets/images/board-layer-black-large.svg";
import largeLayerWhite from "../assets/images/board-layer-white-large.svg";
import { useCallback, useState } from "react";
import placeItem from "../utils/placeItemLogic";
import Cell from "./Cell";

const Board = () => {
  const columns = 7;
  const rows = 6;

  const [matrix, setMatrix] = useState<string[][]>(() =>
    Array(rows)
      .fill(null)
      .map(() => Array(columns).fill("*"))
  );
  const [isUserA, setIsUserA] = useState(true);
  const [connected, setConnected] = useState<number[]>([]);

  //handle actions
  const handleColumnClick = useCallback(
    (columnNumber: number) => {
      placeItem(
        matrix,
        columnNumber,
        rows,
        columns,
        isUserA,
        setMatrix,
        setIsUserA,
        setConnected
      );
    },
    [matrix, isUserA]
  );
  return (
    <RelativeContainer>
      <Container>
        {matrix.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <Cell
              key={cellIndex}
              cellIndex={cellIndex}
              rowIndex={rowIndex}
              handleColumnClick={handleColumnClick}
              connected={connected}
            >
              {cell}
            </Cell>
          ))
        )}
        <Image src={largeLayerBlack} $zindex={10} />
        <Image src={largeLayerWhite} $zindex={30} />
      </Container>
    </RelativeContainer>
  );
};
const RelativeContainer = styled.div`
  position: relative;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  padding: 0.5rem 0.5rem 3rem 0.5rem;
  width: 632px;
  height: 584px;
  position: relative;
  border: 0px solid;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
`;
const Image = styled.img<{ $zindex: number }>`
  position: absolute;
  z-index: ${(props) => props.$zindex};
  user-select: none;
`;

export default Board;
