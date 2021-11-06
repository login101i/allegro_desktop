import React from "react";
import styled from "styled-components";

import ContainerInfo from "./ContainerInfo";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 244px;
  height:100%;
`;


const SidebarRight = () => {
  return (
    <MainContainer>
      <ContainerInfo style={{ margin: "8px" }} />
      <ContainerInfo style={{ margin: "8px" }} />
    </MainContainer>
  );
};

export default SidebarRight;
