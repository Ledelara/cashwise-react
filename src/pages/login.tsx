import LoginForm from "@/components/LoginForm/LoginForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function LoginPage() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <LoginForm />
        </QueryClientProvider>
    )
}