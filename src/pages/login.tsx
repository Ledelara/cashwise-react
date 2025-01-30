import { AlertComponent } from "@/components/Alert/AlertComponent";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import PublicRoute from "@/components/PublicRoute";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function LoginPage() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <PublicRoute>
                    <LoginForm />
                </PublicRoute>
                <AlertComponent />
            </AlertProvider>
        </QueryClientProvider>
    )
}