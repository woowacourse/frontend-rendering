'use client';

import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {props.children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
