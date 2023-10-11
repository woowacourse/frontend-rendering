import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledJsxRegistry from "./registry";
import QueryWrapper from "./QueryWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chsua-votogether-next-app",
  description: "chsua-votogether-next-app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <div>
        <QueryWrapper>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </QueryWrapper>
      </div>
    </html>
  );
};

export default RootLayout;
