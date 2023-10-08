'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'style/Global.style';
import SvgSpriteMap from 'components/@common/SvgIcons/SvgSpriteMap';
import theme from 'style/theme.style';
import StyledComponentsRegistry from 'style/registry';
import { PageArea, Wrapper } from './layout.style';
import { RecoilRoot } from 'recoil';
import ToastList from 'components/Toast/ToastList';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { server } = require('../mocks/server');
  server.listen();
}

const RootLayout = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>가짜 피움</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pium.life/" />
        <meta property="og:title" content="피움🌱" />
        <meta
          property="og:description"
          content="피움은 여러분의 반려 식물 관리 경험을 기록할 수 있도록 도와주고 각자에게 알맞은 관리법을 빠르게 찾도록 도와주고 있어요."
        />
        <meta property="og:site_name" content="Pium" />
        <meta property="og:locale" content="ko_KR" />
        <meta
          name="description"
          content="피움은 여러분의 반려 식물 관리 경험을 기록할 수 있도록 도와주고 각자에게 알맞은 관리법을 빠르게 찾도록 도와주고 있어요."
        />
      </head>
      <body>
        <noscript>화면을 보기 위해서는 자바스크립트를 켜 주셔야 해요!</noscript>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <RecoilRoot>
                <SvgSpriteMap />
                <Wrapper>
                  <PageArea>{children}</PageArea>
                </Wrapper>
                <ToastList />
              </RecoilRoot>
            </QueryClientProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <div id="toast-root" />
      </body>
    </html>
  );
};

export default RootLayout;
