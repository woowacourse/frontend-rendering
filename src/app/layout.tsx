import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: '윤생의 하루스터디',
  description: '윤생의 스터디를 도와주는 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
