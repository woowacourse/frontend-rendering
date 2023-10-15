import Template from '@/components/Template';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../app/fonts/Yeongdeok_Blueroad.ttf',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </main>
  );
}
