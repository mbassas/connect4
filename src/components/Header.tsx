import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <Container>
      <Button>menu</Button>
      <Image src={logo} />
      <Button>restart</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  max-width: 632px;
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 0 20px;
  border-radius: 20px;
  background-color: var(--bg-footer / 1);
  color: var(--color-white/ 1);
`;
const Image = styled.img``;

export default Header;
