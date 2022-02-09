import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const mediumSize = (props) => {
  return css`
    @media only screen and (min-width: 900px) {
      ${props}
    }
  `;
};
