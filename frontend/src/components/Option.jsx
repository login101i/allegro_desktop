import React from "react";
import styled from "styled-components";

const OptionContainer = styled.div`
  transition: 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  flex: 1;
  text-transform: capitalize;
  background-color: white;
  outline: none;
  border: none;

 
`;

const Option = styled.div`
  text-align: center;
  cursor: pointer;
  width: auto;
  color: var(--textColor);
  padding: 10px;
  font-size: ${(props) => (props.size ? props.size : "inherit")};
  text-transform: ${(props) => props.upperCase && "uppercase"};

  &:hover {
    color: var(--linkColor);
  }
`;

const OptionComponent = ({
  option,
  onClick,
  size,
  borderBottom,
  borderTop = true,
  upperCase
}) => {
  return (
    <OptionContainer
      onClick={onClick}
      borderBottom={borderBottom}
      borderTop={borderTop}
    >
      {" "}
      <Option size={size} upperCase={upperCase}>
        {option}
      </Option>
    </OptionContainer>
  );
};

export default OptionComponent;
