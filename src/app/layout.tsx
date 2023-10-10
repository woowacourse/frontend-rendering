import Link from "next/link";
import styles from "./layout.module.scss";
import type { Metadata } from "next";
import Logo from "@/assets/logo.svg";

export const metadata: Metadata = {
  title: "mission",
  description: "this is mission",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={styles.container} lang="ko">
      <body className={styles.body}>
        <div className={styles.header}>
          <header>
            <Link aria-label="셀럽잇 홈페이지" role="button" href="/">
              <Logo width={32} />
            </Link>
            <h5>celuveat</h5>
            <div />
          </header>
        </div>
        <main className={styles.layout}>{children}</main>
      </body>
    </html>
  );
}
