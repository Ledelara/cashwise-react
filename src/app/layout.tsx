'use client'
import PrivateRoute from "@/components/PrivateRoute";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname!);

  return (
    <html lang="pt-BR">
      <body>
        {isPublicPage && children}
        {!isPublicPage && (
          <PrivateRoute>
            {children}
          </PrivateRoute>
        )}
      </body>
    </html>
  );
}
