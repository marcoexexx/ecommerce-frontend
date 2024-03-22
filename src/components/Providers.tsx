"use client";

import ThemeRegistry from "@/themes/themeRegistry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers(props: ProvidersProps) {
  const { children } = props;

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ThemeRegistry>
        {children}
      </ThemeRegistry>
    </QueryClientProvider>
  );
}
