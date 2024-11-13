import React from "react";
import styled from "styled-components";
import markerYellow from "../assets/images/marker-yellow.svg";
import markerRed from "../assets/images/marker-red.svg";

const ColumnSelector = () => {
  const columns = 7;
  return (
    <Container>
      {Array.from({ length: columns }, (_, column) => (
        <Selector key={column}>
          <img src={markerYellow} alt="" />
          {/* <Image src={markerRed} alt="" /> */}
        </Selector>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
  padding: 0 0.5rem;
  width: 100%;
  max-width: 632px;
  height: 36px;
`;

const Selector = styled.div`
  display: flex;
  justify-content: center;
`;

export default ColumnSelector;
