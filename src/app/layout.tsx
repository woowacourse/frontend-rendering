import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// meta. title과 description 설정 가능. server component에서만 가능한 것 같다.
export const metadata: Metadata = {
  title: 'FE Rendering Ukko',
  description: '우코 슉 그리고 프론트엔드 렌더링',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
