import React from "react";
import styled from "styled-components";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px;
  flex-direction: ${(props) => (props.large ? "row" : "column")};
`;

const FlexCol = styled.div`
  display: flex;
  flex-direcion: column;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Even = styled.div`
  flex: 1;
`;

const SecondSection = () => {
  const isMobile = useMediaQuery({ maxWidth: screens.md });
  const isMedium = useMediaQuery({ maxWidth: screens.lg });
  const isLarge = useMediaQuery({ minWidth: screens.lg });

  if (isLarge) {
    return (
      <Container large>
        Large
        <Even>
          <Left />
        </Even>
        <Even>
          <Center />
        </Even>
        <Even>
          <Right />
        </Even>
      </Container>
    );
  } else if (isMedium) {
    return (
      <>
        <Container>
          medium
          <FlexRow>
            <Left />
            <Center />
          </FlexRow>
          <Right />
        </Container>
      </>
    );
  }
};

export default SecondSection;
