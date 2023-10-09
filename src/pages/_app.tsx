import "@/styles/globals.css";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

const Template = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 450px;
  background: white;
  margin: auto;
`;
