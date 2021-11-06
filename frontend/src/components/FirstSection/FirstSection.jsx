import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";

import SidebarLeft from "../FirstSection/SidebarLeft";
import Center from "../FirstSection/Center";
import SidebarRight from "../FirstSection/SideBarRight";

const MainContainer = styled.div`
  max-width: 1600px;
  display: grid;
  grid-template-columns: 292px 16px minmax(0, 985px) 16px 292px;
  height: 610px;
  margin-top: 16px;
`;

const Space = styled.div``;

const FirstSection = () => {
  const isMobile = useMediaQuery({ maxWidth: screens.md });
  const isMedium = useMediaQuery({ maxWidth: screens.lg });
  const isLarge = useMediaQuery({ minWidth: screens.lg });

  if (isLarge) {
    return (
      <MainContainer>
        <SidebarLeft />
        <Space />

        <Center />

        <Space />
        <SidebarRight />
      </MainContainer>
    );
  } else if (isMedium) {
    return (
      <>
        <MainContainer>
          <SidebarLeft />
          <Center />
        </MainContainer>
        <SidebarLeft />
      </>
    );
  }

  return <MainContainer>Hello from mobile resolution</MainContainer>;
};

export default FirstSection;
