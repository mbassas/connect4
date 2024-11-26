import styled from "styled-components";
import Board from "./Board";
import Header from "./Header";
import PlayerCounters from "./PlayerCounters";
import ColumnSelector from "./ColumnSelector";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Game = () => {
  const currentPlayer = useSelector(
    (state: RootState) => state.connect4.currentPlayer
  );

  return (
    <>
      <Container>
        <Header />
        <PlayerCounters />
        <ColumnSelector />
        <Board />
        <Footer />
      </Container>
      <FooterBackground $currentPlayer={currentPlayer} />
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterBackground = styled.div<{ $currentPlayer: number }>`
  background-color: ${(props) =>
    props.$currentPlayer === 0
      ? "var(--footer-opacity)"
      : props.$currentPlayer === 1
      ? "var(bg-player-one)"
      : "var(--bg-player-two)"};
  background-color: var(--footer-opacity);
  height: 250px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
`;

export default Game;
