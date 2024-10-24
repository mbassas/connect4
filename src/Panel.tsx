import styled from "styled-components";
import Board from "./components/Board";
import Header from "./components/Header";

const Panel = () => {
  return (
    <Container>
      <Header />
      <Board />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Panel;
