import styled from "styled-components";
import Board from "./Board";
import Header from "./Header";
import PlayerCounters from "./PlayerCounters";
import ColumnSelector from "./ColumnSelector";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Game = () => {
  const winner = useSelector((state: RootState) => state.connect4.winner);
  return (
    <>
      <Container>
        <Header />
        <PlayerCounters />
        <ColumnSelector />
        <Board />
        <Footer />
      </Container>
      <FooterBackground $winner={winner} className={winner ? "bouncey2" : ""} />
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterBackground = styled.div<{
  $winner: number;
}>`
  background-color: ${(props) =>
    props.$winner === 2
      ? "var(--bg-player-two)"
      : props.$winner === 1
      ? "var(--bg-player-one)"
      : "var(--footer-opacity)"};
  height: 250px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
`;

export default Game;
