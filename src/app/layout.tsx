import './globals.css';
import type { Metadata } from 'next';
import Header from './_shared/_components/header';
import styles from '@/app/layout.module.css';

export const metadata: Metadata = {
  title: 'shook',
  description: 'S-HOOK에서 새로운 노래의 킬링파트를 듣고 사람들과 공유해 보세요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={styles.layoutContainer}>
        <Header />
        {children}
      </body>
    </html>
  );
}
