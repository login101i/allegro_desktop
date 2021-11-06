import React from "react";
import styled from "styled-components";

import Image31 from "../../assets/pictures/Image31.png";
import Image32 from "../../assets/pictures/Image32.png";
import Image33 from "../../assets/pictures/Image33.png";
import Image34 from "../../assets/pictures/Image34.png";
import Image35 from "../../assets/pictures/Image35.png";
import Image36 from "../../assets/pictures/Image36.png";
import Image37 from "../../assets/pictures/Image37.png";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 2px 10px;
  max-width: 130px;
  height: 140px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Title = styled.span`
  color: grey;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`;

const ThirdSection = () => {
  return (
    <Container>
      <ItemContainer>
        <Image src={Image31} />
        <Title>Jesienna Pielęgnacja</Title>
      </ItemContainer>

      <ItemContainer>
        <Image src={Image32} />
        <Title>Strefa Rehabilitacji</Title>
      </ItemContainer>

      <ItemContainer>
        <Image src={Image33} />
        <Title>Telemedycyna [Vouchery]</Title>
      </ItemContainer>

      <ItemContainer>
        <Image src={Image34} />
        <Title>Elektronika - top 100</Title>
      </ItemContainer>
      <ItemContainer>
        <Image src={Image35} />
        <Title>Okacje na smartfony</Title>
      </ItemContainer>

      <ItemContainer>
        <Image src={Image36} />
        <Title>Telewizory i akcesoria</Title>
      </ItemContainer>
      <ItemContainer>
        <Image src={Image37} />
        <Title>Bramy i ogrodzenia</Title>
      </ItemContainer>

      <ItemContainer>
        <Image src={Image31} />
        <Title>Jesienna Pielęgnacja</Title>
      </ItemContainer>

      <ItemContainer>
        <Image src={Image32} />
        <Title>Strefa Rehabilitacji</Title>
      </ItemContainer>

      <ItemContainer>
        <Image src={Image33} />
        <Title>Telemedycyna [Vouchery]</Title>
      </ItemContainer>
    </Container>
  );
};

export default ThirdSection;
