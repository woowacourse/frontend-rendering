import Header from '@/components/server/Header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '셀럽잇',
  description: '셀럽 추천 맛집 서비스, 셀럽잇',
  openGraph: {
    title: '셀럽잇',
    description: '셀럽 추천 맛집 서비스, 셀럽잇',
    images: ['https://www.celuveat.com/og-image.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='max-w-screen-xl mx-auto'>
        <Header />
        {children}
      </body>
    </html>
  );
}
