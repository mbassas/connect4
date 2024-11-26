import styled from "styled-components";
import PlayerCounter from "./PlayerCounter";
import playerOne from "../assets/images/player-one.svg";
import playerTwo from "../assets/images/player-two.svg";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const PlayerCounters = () => {
  const firstPlayerPoints = useSelector(
    (state: RootState) => state.connect4.firstPlayerPoints
  );
  const secondPlayerPoints = useSelector(
    (state: RootState) => state.connect4.secondPlayerPoints
  );
  return (
    <Container>
      <PlayerCounter
        score={firstPlayerPoints}
        image={playerOne}
        playerNumber={1}
      />
      <PlayerCounter
        score={secondPlayerPoints}
        image={playerTwo}
        playerNumber={2}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 632px;
`;

export default PlayerCounters;
