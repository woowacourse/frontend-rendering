import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledJsxRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chsua-votogether-next-app",
  description: "chsua-votogether-next-app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledJsxRegistry>{children}</StyledJsxRegistry>
    </html>
  );
}
