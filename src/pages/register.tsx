import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RegisterPage() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <RegisterForm />
            </AlertProvider>
        </QueryClientProvider>
    )
}