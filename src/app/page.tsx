"use client";

import Navbar from "@/components/Navbar";
import GlobalStyle from "@/styles/GlobalStyle";
import ResetStyle from "@/styles/ResetStyle";
import theme from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import SearchPage from "./SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
    },
  },
});

const Page = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ResetStyle />
        <GlobalStyle />
        <Navbar />
        <PageContent>
          <SearchPage />
        </PageContent>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Page;

const PageContent = styled.main`
  overflow-y: auto;
  flex: 1;
`;
