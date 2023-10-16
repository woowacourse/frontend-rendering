import styles from './layout.module.css';

export const metadata = {
  title: 'Carffeine',
  description: '편리한 전기 자동차 충전소 지도 서비스 Carffeine',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.container}>{children}</body>
    </html>
  );
}
