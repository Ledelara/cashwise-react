import { AlertComponent } from "@/components/Alert/AlertComponent";
import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import PublicRoute from "@/components/PublicRoute";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RegisterPage() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <PublicRoute>
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            width: '100%',
                            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                        }}
                    >
                        <RegisterForm />
                    </Container>
                </PublicRoute>
                <AlertComponent />
            </AlertProvider>
        </QueryClientProvider>
    )
}