import './globals.css';
import type { Metadata } from 'next';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import ContentLayout from './ContentLayout';

export const metadata: Metadata = {
  title: '여기에 타이틀을 쓰면 보이나봐요',
  description: 'next 탐구 중입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <StyledComponentsRegistry>
          <ContentLayout>{children}</ContentLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
