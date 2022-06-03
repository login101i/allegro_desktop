import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1660px;
  height: 600px;
  margin-top: ${(props) => (props.isMobile ? "0px" : "16px")};
  display: grid;
  grid-template-columns: 292px minmax(0, 985px) 292px;
  grid-column-gap: 12px;
  grid-row-gap: 11px;
`;
