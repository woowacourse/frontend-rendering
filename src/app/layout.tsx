import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '블로그 포스트 관리 툴, 동글',
  description: '블로그 포스트 관리 및 포스팅을 도와주는 툴입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        {children}
        <div id='modal-portal'></div>
      </body>
    </html>
  );
}
