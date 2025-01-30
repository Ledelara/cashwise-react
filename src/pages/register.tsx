import { AlertComponent } from "@/components/Alert/AlertComponent";
import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import PublicRoute from "@/components/PublicRoute";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RegisterPage() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <PublicRoute>
                    <RegisterForm />
                </PublicRoute>
                <AlertComponent />
            </AlertProvider>
        </QueryClientProvider>
    )
}