import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/common/Header';
import LayoutContainer from '@/common/LayoutContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FE Rendering Ukko',
  description: '우코 슉 그리고 프론트엔드 렌더링',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  );
}
