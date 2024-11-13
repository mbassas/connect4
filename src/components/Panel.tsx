import styled from "styled-components";
import Board from "./Board";
import Header from "./Header";
import PlayerCounters from "./PlayerCounters";
import ColumnSelector from "./ColumnSelector";
import Footer from "./Footer";

const Panel = () => {
  return (
    <>
      <Container>
        <Header />
        <PlayerCounters />
        <ColumnSelector />
        <Board />
        <Footer winner={1} />
      </Container>
      <FooterBackground />
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterBackground = styled.div`
  background-color: var(--footer-opacity);
  height: 250px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
`;

export default Panel;
