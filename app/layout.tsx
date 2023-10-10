import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TeamByTeam NextJs",
  description: "TeamByTeam migrate to NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <base href="/" />
        <title>팀바팀</title>
      </head>
      <body>
        <body>{children}</body>
      </body>
    </html>
  );
}
