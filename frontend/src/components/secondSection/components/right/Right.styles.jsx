import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 18px;
  grid-row-gap: 18px;
  width: 100%;
`;
const ButtonStyles = css`
  display: flex;

  background: orange;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: rgb(247, 156, 0);
  }
`;

export const Block1 = styled.div`
  ${ButtonStyles};
  grid-area: 1 / 1 / 2 / 2;
`;
export const Block2 = styled.div`
  ${ButtonStyles};
  grid-area: 1 / 2 / 2 / 3;
`;
export const Block3 = styled.div`
  ${ButtonStyles};
  grid-area: 2 / 1 / 3 / 2;
`;
export const Block4 = styled.div`
  ${ButtonStyles};
  grid-area: 2 / 2 / 3 / 3;
`;

export const BlockTitle = styled.span`
  font-weight: 600;
  text-transform: upper-case;
  font-size: 23px;
  padding: 20px;
  text-align: center;
  color: white;
 
`;
