import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <Container>
      <Button $marginRight>menu</Button>
      <img alt="" src={logo} />
      <Button>restart</Button>
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
`;

export default Header;
