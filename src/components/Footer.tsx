import styled from "styled-components";
import turnBackgroundYellow from "../assets/images/turn-background-yellow.svg";
import turnBackgroundRed from "../assets/images/turn-background-red.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setTimer, setWinner, startGame } from "../connect4Slice";
import { useCallback, useEffect } from "react";

const Footer = () => {
  const currentPlayer = useSelector(
    (state: RootState) => state.connect4.currentPlayer
  );
  const winner = useSelector((state: RootState) => state.connect4.winner);
  const gameActive = useSelector(
    (state: RootState) => state.connect4.activeGame
  );
  const timer = useSelector((state: RootState) => state.connect4.timer);
  const dispatch = useDispatch();

  const handleStartGame = useCallback(() => {
    dispatch(startGame());
    dispatch(setTimer(30));
  }, [dispatch]);

  // Timer effect
  useEffect(() => {
    if (!gameActive) return; // Stop timer if the game is inactive

    const interval = setInterval(() => {
      if (timer === 1) {
        const otherPlayer = currentPlayer === 1 ? 2 : 1;
        dispatch(setWinner(otherPlayer));
        clearInterval(interval);
      } else {
        dispatch(setTimer(timer - 1));
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount or re-render
  }, [gameActive, currentPlayer, dispatch, timer]);

  // Reset timer on player change
  useEffect(() => {
    if (gameActive) dispatch(setTimer(30));
  }, [currentPlayer, dispatch, gameActive]);

  return (
    <Container>
      {!gameActive && (
        <Panel>
          <Text>Player {winner}</Text>
          <Bold>WINS</Bold>
          <Button onClick={handleStartGame}>play again</Button>
        </Panel>
      )}
      {gameActive && currentPlayer === 1 && (
        <TurnPanel>
          <Image src={turnBackgroundRed} alt="" />
          <TextContainer $currentPlayer={1}>
            <Text $uppercase>player {currentPlayer}'s turn</Text>
            <Bold>{timer}s</Bold>
          </TextContainer>
        </TurnPanel>
      )}
      {gameActive && currentPlayer === 2 && (
        <TurnPanel>
          <Image src={turnBackgroundYellow} alt="" />
          <TextContainer $currentPlayer={2}>
            <Text $uppercase>player {currentPlayer}'s turn</Text>
            <Bold>{timer}s</Bold>
          </TextContainer>
        </TurnPanel>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: -40px;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white-opacity);
  border: 4px solid #000;
  border-radius: 20px;
  box-shadow: 0 9px #000;
  width: 285px;
  height: 160px;
  z-index: 40;
  position: absolute;
`;

const Bold = styled.h1`
  font-weight: bold;
  font-size: 3.25rem;
  text-align: center;
`;

const TurnPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 40;
`;

const TextContainer = styled.div<{ $currentPlayer?: number }>`
  position: absolute;
  top: 3rem;
  color: ${({ $currentPlayer }) =>
    $currentPlayer === 1 ? "var(--color-white)" : "var(--color-black)"};
`;

const Text = styled.span<{ $uppercase?: boolean }>`
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  text-transform: ${({ $uppercase }) => ($uppercase ? "uppercase" : "none")};
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

const Button = styled.button`
  background-color: var(--bg-footer);
  color: var(--white-opacity);
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  padding: 0px 20px;
  text-transform: uppercase;
  height: 40px;
  transition: background-color 0.3s;
  font-weight: bold;
  width: fit-content;
  border: none;

  &:hover {
    background-color: var(--bg-player-one);
  }
`;

export default Footer;
