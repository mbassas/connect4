import styled from "styled-components";
import largeLayerBlack from "../assets/images/board-layer-black-large.svg";
import largeLayerWhite from "../assets/images/board-layer-white-large.svg";
import { useCallback } from "react";
import Cell from "./Cell";
import { useDispatch, useSelector } from "react-redux";
import { clickColumn, setHoveredColumn } from "../connect4Slice";
import { RootState } from "../store";

const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector((state: RootState) => state.connect4.board);

  //handle actions
  const handleColumnClick = useCallback(
    (columnNumber: number) => {
      dispatch(clickColumn(columnNumber));
    },
    [dispatch]
  );

  const handleMouseEnter = useCallback(
    (columnIndex: number) => {
      dispatch(setHoveredColumn(columnIndex));
    },
    [dispatch]
  );

  const handleMouseLeave = useCallback(() => {
    dispatch(setHoveredColumn(null));
  }, [dispatch]);

  return (
    <RelativeContainer>
      <Container>
        {board.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              cellIndex={cellIndex}
              rowIndex={rowIndex}
              onMouseEnter={() => handleMouseEnter(cellIndex)}
              onMouseLeave={handleMouseLeave}
              handleColumnClick={handleColumnClick}
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
