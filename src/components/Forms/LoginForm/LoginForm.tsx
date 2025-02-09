import { loginSchema } from "@/schemas/loginSchema"
import { useLoginUser } from "@/services/mutate";
import { ILoginUserPayload } from "@/types/@types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, TextField, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form"
import Form from "../Form";
import { APP_ROUTES } from "@/constants/app-routes";

export default function LoginForm() {
    const { palette } = useTheme();
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginUserPayload>({
        resolver: zodResolver(loginSchema),
    });

    const { loginUserMutation, loading } = useLoginUser();

    const onSubmit = async (data: ILoginUserPayload) => {
        loginUserMutation.mutate(data);
    };

    return (
        <div>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    backgroundColor: palette.background.paper,
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    width: '300px',
                    background: "rgba(255, 255, 255, 0.1)",
                }}
                buttonLabel={loading ? 'Carregando...' : 'Entrar'}
                loading={loading}
            >
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    {...register('email')}
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                    style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff', 
                    }}
                />
                <TextField
                    id="password"
                    label="Senha"
                    variant="outlined"
                    type="password"
                    {...register('password')}
                    error={!!errors?.password}
                    helperText={errors?.password?.message}
                    style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',    
                    }}
                />
            </Form>
            <Typography variant="body2" style={{ marginTop: '10px', textAlign: 'center', color: palette.text.secondary }}>
                Não tem uma conta? <Link href={APP_ROUTES.public.register}>Cadastre-se</Link>
            </Typography>
        </div>
    )
}