import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { PropsWithChildren } from 'react';

const noto_sans_kr = Noto_Sans_KR({ subsets: ['latin'] });

type RootLayoutProps = PropsWithChildren;

export const metadata: Metadata = {
  title: '집사의고민',
  description: '집사의고민 with Next JS',
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="ko">
      <body className={noto_sans_kr.className}>{children}</body>
    </html>
  );
}
