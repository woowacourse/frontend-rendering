import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "./layout.module.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "괜찮을지도",
  description: "당신만의 커스텀 지도를 만들 수 있습니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section className={styles.logoWrapper}>
          <Image
            src="/logo.svg"
            alt="Create Next App logo"
            width={173}
            height={36}
          />
        </section>
        <article className={styles.childrenWrapper}>{children}</article>
        <Navbar />
      </body>
    </html>
  );
}
