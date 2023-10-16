import StyledComponentsRegistry from '@/lib/registry';
import type { Metadata } from 'next';
import { GlobalStyle } from './GlobalStyles';

export const metadata: Metadata = {
  title: 'Baton',
  description: 'matching Code reviewer application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
