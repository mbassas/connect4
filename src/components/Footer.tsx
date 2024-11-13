import styled from "styled-components";
import turnBackgroundYellow from "../assets/images/turn-background-yellow.svg";

const Footer: React.FC<{ winner: number }> = ({ winner }) => {
  return (
    <Container>
      {/* <Panel>
         <Text>Player {winner}</Text>
        <Bold>WINS</Bold> 
        {/* <Button>play again</Button> 
      </Panel>*/}
      <TurnPanel>
        <Image src={turnBackgroundYellow} alt="" />
        <TextContainer>
          <Text $uppercase>player {winner}'s turn</Text>
          <Bold>16s</Bold>
        </TextContainer>
      </TurnPanel>
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

const TextContainer = styled.div`
  position: absolute;
  top: 3rem;
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
