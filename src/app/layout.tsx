import Providers from "./Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="코드 리뷰를 주고 받을 수 있는 서비스" />
        <link rel="icon" href="/favicon.png" type="image/x-icon"></link>
        <title>Baton</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
