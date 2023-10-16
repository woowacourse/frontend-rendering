import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
import "./styles/resetStyle.css";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "요즘카페",
  description: "트렌디한 성수 지역의 카페를 손쉽게 탐색하는 서비스, 요즘카페",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div id="root">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
