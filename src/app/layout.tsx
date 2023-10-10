import localFont from "next/font/local";

import type { Metadata } from "next";

import "./global.css";

export const metadata: Metadata = {
  title: "하루스터디",
  description: "하루스터디 by create next app",
};

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
