'use client';

import GlobalStyles from '../../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import '../../styles/pretendard.css';
import { styled } from 'styled-components';
import type { ReactNode } from 'react';
import Head from 'next/head';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <base href="/" />
        <title>짭바팀</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <LandingHeader />
          {children}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
