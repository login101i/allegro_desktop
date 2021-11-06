import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
`;

const Block = styled.div`
  height: 22vw;
  width: 22vw;
  max-height: 200px;
  max-width: 200px;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BlockTitle = styled.span`
  font-weight: 600;
  text-transform: upper-case;
  font-size: 23px;
  padding: 20px;
  text-align: center;
`;

const Right = () => {
  return (
    <Container>
      <Block>
        <BlockTitle>Monitory</BlockTitle>
      </Block>
      <Block>
        <BlockTitle>Tablety</BlockTitle>
      </Block>
      <Block>
        <BlockTitle>Urządzenia VR</BlockTitle>
      </Block>
      <Block>
        <BlockTitle>Akcesoria PC</BlockTitle>
      </Block>
    </Container>
  );
};

export default Right;
