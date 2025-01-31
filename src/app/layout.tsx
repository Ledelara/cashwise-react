'use client'
import PrivateRoute from "@/components/PrivateRoute";
import PublicRoute from "@/components/PublicRoute";
import { ThemeProviderComponent } from "@/contexts/Theme/ThemeContext";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname!);

  const queryClient = new QueryClient();

  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProviderComponent>
            {isPublicPage ? (
              <PublicRoute>
                {children}
              </PublicRoute>
            ) : (
              <PrivateRoute>
                {children}
              </PrivateRoute>
            )}
          </ThemeProviderComponent>
        </QueryClientProvider>
      </body>
    </html>
  );
}
