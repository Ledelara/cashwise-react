'use client'
import PrivateRoute from "@/components/PrivateRoute";
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
          {isPublicPage && children}
          {!isPublicPage && (
            <PrivateRoute>
              {children}
            </PrivateRoute>
          )}
        </QueryClientProvider>
      </body>
    </html>
  );
}
