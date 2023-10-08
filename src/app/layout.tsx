import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Baton by NEXT.js',
  description: 'code review plaform',
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
