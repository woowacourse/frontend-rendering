import SvgSpriteMap from '@/components/@common/SvgIcons/SvgSpriteMap';
import StyledComponentsRegistry from '@/style/registry';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalStyle } from '@/style/Global.style';
import ClientTemplate from './template';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Clean Fake Pium',
	description: '클린이 만든 피움입니다 w NextJS',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ko'>
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<SvgSpriteMap />
					<GlobalStyle />
					<ClientTemplate>{children}</ClientTemplate>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
