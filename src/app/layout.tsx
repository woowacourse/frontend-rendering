import "./globals.css";
import "./reset.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/font/SpoqaHanSansNeo-Regular.woff",
  display: "swap",
  weight: "normal",
  style: "normal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
