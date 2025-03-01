import { AlertComponent } from "@/components/Alert/AlertComponent";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import PublicRoute from "@/components/PublicRoute";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '@/styles/_globals.scss';

export default function LoginPage() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <PublicRoute>
                    <Container
                        className="login-register-container"
                        maxWidth="xs"
                    >
                        <LoginForm />
                    </Container>
                </PublicRoute>
                <AlertComponent />
            </AlertProvider>
        </QueryClientProvider>
    )
}