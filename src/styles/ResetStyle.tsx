import { Global, css } from "@emotion/react";

const styles = css`
  /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select {
    margin: 0;
    padding: 0;
  }

  button {
    color: inherit;
    text-shadow: inherit;
    background: unset;
    border: unset;
  }

  a {
    color: inherit;
    text-decoration: unset;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  iframe {
    border: 0;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0;
  }

  fieldset {
    border: 0;
  }
`;

const ResetStyle = () => <Global styles={styles} />;

export default ResetStyle;
