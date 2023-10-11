import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "요즘카페",
  description: "트렌디한 성수 지역의 카페를 손쉽게 탐색하는 서비스, 요즘카페",
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="ko">
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
