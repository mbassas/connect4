import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { restartGame, setTimer } from "../connect4Slice";

const Header = () => {
  const dispatch = useDispatch();

  const handleRestartGame = () => {
    dispatch(restartGame());
    dispatch(setTimer(30));
  };

  return (
    <Container>
      <Button $marginRight>menu</Button>
      <img alt="" src={logo} />
      <Button onClick={handleRestartGame}>restart</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 632px;
`;
const Button = styled.button<{ $marginRight?: boolean }>`
  text-transform: uppercase;
  padding: 0 20px;
  border-radius: 20px;
  background-color: var(--footer-opacity);
  color: var(--white-opacity);
  border: 0 solid;
  height: 40px;
  font-size: 100%;
  font-weight: bold;
  margin-right: ${(props) => (props.$marginRight ? "27px" : "0")};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--bg-player-one);
  }
`;

export default Header;
