import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Logo from './components/Logo';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '괜찮을지도',
  description: '나의 관심사로 만드는 지도',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Logo />
        <div className={styles.space} />
        {children}
      </body>
    </html>
  );
}
