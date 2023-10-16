import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "피움",
  description: "반려 식물 관리 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div id="app">
          <RootProvider>{children}</RootProvider>
        </div>
      </body>
    </html>
  );
}
