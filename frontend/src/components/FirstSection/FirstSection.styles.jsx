import styled from "styled-components";

export const MainContainer = styled.div`
  height: 600px;
  margin-top: ${(props) => (props.isMobile ? "0px" : "16px")};
  display: grid;
  grid-template-columns: 275px minmax(0, 925px) 325px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  width:${props=>props.isMobile ? "100vw" : ""}
`;
