import Template from "@/common/Template";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks/browser");
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Template>
  );
}
