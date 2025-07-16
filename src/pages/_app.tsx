import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import { figtree } from '@/lib/fonts';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <main className={`${figtree.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
    </QueryClientProvider>
  );
}
