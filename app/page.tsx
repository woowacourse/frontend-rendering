'use client';

import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from '@/styles/theme';
import FoodDetail from './pages/FoodDetail/FoodDetail';
import RootStyleRegistry from './lib/RootStyleRegistry';
import GlobalStyle from './components/@common/GlobalStyle';

export default function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        retry: false,
        useErrorBoundary: true,
      },
      mutations: {
        useErrorBoundary: true,
      },
    },
  });
  return (
    <RootStyleRegistry>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <main
            style={{
              width: '100vw',
              height: '100vh',
              backgroundColor: '#3E5E8E',
              position: 'fixed',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '60vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <section
                style={{
                  left: '30vw',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 26,
                    color: theme.color.white,
                    fontWeight: 400,
                  }}
                >
                  사료 선택이 어려운 <br /> 초보 집사들을 위해
                </h3>
                <h1
                  style={{
                    fontSize: 52,
                    color: theme.color.white,
                    fontWeight: 700,
                  }}
                >
                  집사의고민
                </h1>
              </section>
              <section
                style={{
                  width: 418,
                  height: '100vh',
                  backgroundColor: '#fff',
                  overflowY: 'scroll',
                }}
              >
                <FoodDetail />
              </section>
            </div>
          </main>
        </QueryClientProvider>
      </ThemeProvider>
    </RootStyleRegistry>
  );
}
