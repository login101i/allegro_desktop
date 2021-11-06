import React from "react";
import styled from "styled-components";

import Left from "./Left";
import Right from "./Right";

import PsiSmak from "../../assets/pictures/PsiSmak.png";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  position: relative;
  height:700px;
`;

const BackgroundImage = styled.img`
  width: 160%;
  object-fit: contain;
  max-height: 280px;
  border: 2px solid orange;
  position: absolute;
  top: 0;
  left: -20%;
`;

const RowContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 0px;
  width: 100%;
  height: 200px;
  display: flex;

`;

const FourthSection = () => {
  return (
    <Container>
      <BackgroundImage src={PsiSmak} />
      <RowContainer>
        <Left />
        <Right />
      </RowContainer>
    </Container>
  );
};

export default FourthSection;
