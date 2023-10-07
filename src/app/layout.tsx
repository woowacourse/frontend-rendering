import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '펀잇',
  description:
    '펀잇은 모든 편의점 음식, 리뷰, 꿀조합을 한눈에 확인할 수 있는 서비스입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <div className='layout-container'>
          <main className='main'>{children}</main>
        </div>
      </body>
    </html>
  );
}
