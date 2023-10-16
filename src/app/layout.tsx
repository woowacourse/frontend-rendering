import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "하루스터디",
  description: "하루스터디",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
