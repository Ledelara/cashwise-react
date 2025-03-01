import { AlertComponent } from "@/components/Alert/AlertComponent";
import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import PublicRoute from "@/components/PublicRoute";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '@/styles/_globals.scss';

export default function RegisterPage() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <PublicRoute>
                    <Container className="login-register-container">
                        <RegisterForm />
                    </Container>
                </PublicRoute>
                <AlertComponent />
            </AlertProvider>
        </QueryClientProvider>
    )
}