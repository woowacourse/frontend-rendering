import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '노래 듣기 페이지',
  description: '우코 슉 그리고 프론트엔드 렌더링',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
