import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid var(--borderColor);
  justify-content: space-evenly;
`;

const SpanText = styled.span`
  text-transform: uppercase;
  letter-spacing: 1.25px;
  text-align: center;
  width: 100%;
  padding: 10px 5px;
  color: var(--linkColor);
`;

const BorderAndTitle = (props ) => {
  

  return (
    <div>
      <Header>
        <SpanText>{props.title || "Zobacz więcej"} </SpanText>
      </Header>
    </div>
  );
};

export default BorderAndTitle;
