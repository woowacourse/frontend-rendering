import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import Header from './Header';
import ContentLayout from './ContentLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '여기에 타이틀을 쓰면 보이나봐요',
  description: 'next 탐구 중입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ContentLayout>{children}</ContentLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
