"use client";

import StyledComponentsRegistry from "./lib/styled-components-registry";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
