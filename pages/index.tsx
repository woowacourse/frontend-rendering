import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import initMockAPI from '@/app/mocks';
import CustomerList from '@/app/page';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: false,
      },
    },
  });

  initMockAPI();
  return (
    <QueryClientProvider client={queryClient}>
      <CustomerList />
    </QueryClientProvider>
  );
}
