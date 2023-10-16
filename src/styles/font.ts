import { css } from "styled-components";

interface Font {
  size: number;
  weight: number;
}

const font = ({ size, weight }: Font) => {
  return css`
    font-size: ${size}rem;
    font-weight: ${weight};
  `;
};

export default font;
