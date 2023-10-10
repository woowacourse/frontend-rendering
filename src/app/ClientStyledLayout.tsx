'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/style/theme.style';
import RootTemplate from './RootTemplate';

const ClientStyleLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<RootTemplate>{children}</RootTemplate>
		</ThemeProvider>
	);
};

export default ClientStyleLayout;
