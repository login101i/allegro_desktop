import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 25px;
  flex: 1;

  `;

const Image = styled.img`
  max-width: 120px;
  width: 100px;
  max-height: 120px;
  heigth: 100px;
  margin-bottom: 15px;
`;
const Title = styled.div`
  font-weith: 22px;
  text-align: center;
`;

const Item = (props) => {
  const { image, title } = props;

  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Item;
