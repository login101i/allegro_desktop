import React from "react";
import styled from "styled-components";


import ProductContainer from "../ProductContainer";
import BorderAndTitle from "../BorderAndTitle";

import Kot1 from "../../assets/pictures/Kot1.png";
import Kot2 from "../../assets/pictures/Kot2.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin: 10px 0px;
  width: 300px;
  background: white;
  flex: 1;
  margin: 5px;
  margin-left: 15px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin: 10px;
`;

const Right = () => {
  return (
 <Container>
       <Title>Polecane dla kota</Title>
       <FlexRow>
         <ProductContainer img={Kot1} discount={32} oldPrice={"122,99"} price={"89.99"} />
         <ProductContainer img={Kot2} discount={19} oldPrice={"122,99"} price={"89.99"} />
       </FlexRow>
       <BorderAndTitle />
     </Container>
  )
    
};

export default Right;
