import { RuleSet, css } from "styled-components";

const media = {
  mobile: (styles: TemplateStringsArray | RuleSet<object>) => css`
    @media (max-width: 480px) {
      ${styles}
    }
  `,

  tablet: (styles: TemplateStringsArray | RuleSet<object>) => css`
    @media (max-width: 768px) {
      ${styles}
    }
  `,

  desktop: (styles: TemplateStringsArray | RuleSet<object>) => css`
    @media (min-width: 1137px) {
      ${styles}
    }
  `,
};

export default media;
