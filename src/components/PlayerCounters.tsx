import styled from "styled-components";
import PlayerCounter from "./PlayerCounter";
import playerOne from "../assets/images/player-one.svg";
import playerTwo from "../assets/images/player-two.svg";

const PlayerCounters = () => {
  return (
    <Container>
      <PlayerCounter score={2} image={playerOne} playerNumber={1} />
      <PlayerCounter score={3} image={playerTwo} playerNumber={2} />
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
