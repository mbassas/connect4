import styled from "styled-components";

const PlayerCounter: React.FC<{
  image: string;
  playerNumber: number;
  score: number;
}> = ({ image, playerNumber, score }) => {
  return (
    <>
      {playerNumber === 1 ? (
        <Container>
          <Image src={image} alt="" />
          <TextContainer>
            <H3>Player {playerNumber}</H3>
            <Score> {score} </Score>
          </TextContainer>
        </Container>
      ) : (
        <Container $player2>
          <Image src={image} alt="" $player2 />
          <TextContainer $player2>
            <H3 $player2>Player {playerNumber}</H3>
            <Score> {score} </Score>
          </TextContainer>
        </Container>
      )}
    </>
  );
};

const Container = styled.div<{ $player2?: boolean }>`
  display: flex;
  align-items: center;
  background-color: var(--white-opacity);
  flex-direction: ${(props) => (props.$player2 ? "row-reverse" : "row")};
  box-shadow: 0 9px #000;
  border: solid 4px;
  border-radius: 20px;
  padding: ${(props) =>
    props.$player2 ? "0.5rem 0 0.5rem 32px" : "0.5rem 32px 0.5rem 0px"};
  margin: ${(props) => (props.$player2 ? "0 32px 0 0" : "0 0 0 32px")};
  justify-content: space-between;
  width: 42%;
  height: 100px;
`;

const Image = styled.img<{ $player2?: boolean }>`
  margin-left: ${(props) => (props.$player2 ? "0" : "-20px")};
  margin-right: ${(props) => (props.$player2 ? "-20px" : "0")};
`;

const TextContainer = styled.div<{ $player2?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.$player2 ? "row-reverse" : "row")};
  text-align: ${(props) => (props.$player2 ? "right" : "left")};
`;

const H3 = styled.h3<{ $player2?: boolean }>`
  text-transform: uppercase;
  margin-right: ${(props) => (props.$player2 ? "0" : "2.5rem")};
  margin-left: ${(props) => (props.$player2 ? "2.5rem" : "0")};
`;

const Score = styled.span`
  font-size: 3.75rem;
  font-weight: bold;
  line-height: 1;
`;

export default PlayerCounter;
