import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function LoginPage() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <LoginForm />
            </AlertProvider>
        </QueryClientProvider>
    )
}