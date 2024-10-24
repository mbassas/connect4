import styled from "styled-components";
import golyored from "../assets/images/counter-red-large.svg";
import golyoyellow from "../assets/images/counter-yellow-large.svg";

interface CellProps {
  cellIndex: number;
  handleColumnClick: (cellIndex: number) => void;
  children: React.ReactNode;
  connected: number[];
  rowIndex: number;
}

const Cell: React.FC<CellProps> = ({
  cellIndex,
  handleColumnClick,
  children,
  connected,
  rowIndex,
}) => {
  return (
    <Container onClick={() => handleColumnClick(cellIndex)}>
      {children === "X" && <Image src={golyored} className="drop"></Image>}
      {children === "O" && <Image src={golyoyellow} className="drop"></Image>}
      {children === "*" && null}
      {connected.includes(rowIndex * 7 + cellIndex) ? (
        <Round className="animate-pulse" />
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.button`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  user-select: none;
  background-color: transparent;
  align-items: center;
  border-color: transparent;
`;

const Round = styled.div`
  position: absolute;
  width: 34px;
  height: 34px;
  border: 6px solid white;
  border-radius: 9999px;
  z-index: 40;
`;

const Image = styled.img`
  z-index: 20;
  padding: 0.5rem;
  margin-top: 5px;
`;

export default Cell;
