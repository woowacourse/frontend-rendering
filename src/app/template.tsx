'use client';
import { ThemeProvider } from 'styled-components';
import theme from '@/style/theme.style';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageArea, Wrapper } from './template.style';
const queryClient = new QueryClient();

const ClientTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Wrapper>
					<PageArea>{children}</PageArea>
				</Wrapper>
			</QueryClientProvider>
		</ThemeProvider>
	);
};

export default ClientTemplate;
