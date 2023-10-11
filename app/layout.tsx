import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import QueryWrapper from "./QueryWrapper";

export const metadata: Metadata = {
  title: "chsua-votogether-next-app",
  description: "chsua-votogether-next-app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <QueryWrapper>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </QueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
