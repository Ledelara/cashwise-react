import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RegisterPage() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <RegisterForm />
        </QueryClientProvider>
    )
}