'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/style/theme.style';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageArea, Wrapper } from './template.style';
import Providers from './providers';

const ClientTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<Providers>
				<Wrapper>
					<PageArea>{children}</PageArea>
				</Wrapper>
			</Providers>
		</ThemeProvider>
	);
};

export default ClientTemplate;
