import React from "react";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet()
  );

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  };

  const StyledComponentsRegistry = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children as React.ReactElement}
      </ThemeProvider>
    </StyleSheetManager>
  );

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
}
