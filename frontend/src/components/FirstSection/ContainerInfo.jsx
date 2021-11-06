import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  flex-direction:column;
  background:white;
  margin-bottom:8px;
`;

const Title = styled.span`
  color: var(--textColor);
  font-size: 22px;
  display: absolute;
  left: 170px;
  top: 140px;
`;

const ContainerInfo = () => {
  return (
    <Container>
      <Title>Cześć Maciej!</Title>
    </Container>
  );
};

export default ContainerInfo;
