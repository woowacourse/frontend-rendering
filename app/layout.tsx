import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";

export const metadata: Metadata = {
  title: "chsua-votogether-next-app",
  description: "chsua-votogether-next-app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
