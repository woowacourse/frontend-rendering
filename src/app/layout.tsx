import type { Metadata } from 'next';
import './globals.css';
import { MSWComponent } from '@/mocks/MSWcomponent';

export const metadata: Metadata = {
  title: 'Baton by NEXT.js',
  description: 'code review plaform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <MSWComponent>{children}</MSWComponent>
      </body>
    </html>
  );
}
