import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
