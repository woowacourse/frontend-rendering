import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend Rendering',
  description: '내 서비스 클론 코딩을 통해 프론트엔드 렌더링 방식 이해하기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
