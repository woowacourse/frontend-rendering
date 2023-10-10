'use client';
import StyledComponentsRegistry from '@/lib/registry';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
