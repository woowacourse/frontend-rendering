"use client";

import PageLayout from "@/components/pageLayout/PageLayout";
import GlobalStyle from "@/styles/GlobalStyle";
import Providers from "@/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <GlobalStyle />
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}
