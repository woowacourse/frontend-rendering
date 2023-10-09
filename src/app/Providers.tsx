'use client';

import StyledComponentsRegistry from '../styles/registry';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../GlobalStyles';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}><GlobalStyles />{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
