import { IRegisterUserPayload } from "@/types/@types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/registerSchema";
import { useCreateUser } from "@/services/mutate";
import { Link, TextField, Typography } from "@mui/material";
import Form from "../Form";
import { APP_ROUTES } from "@/constants/app-routes";

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterUserPayload>({
        resolver: zodResolver(registerSchema),
    });

    const { createUserMutation, loading } = useCreateUser();

    const onSubmit = async (data: IRegisterUserPayload) => {
        createUserMutation.mutate(data);
    };

    return (
        <div>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    backgroundColor: '#f5f5f5',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    width: '300px',
                }}
                buttonLabel={loading ? 'Carregando...' : 'Cadastrar'}
                loading={loading}
            >
                <TextField
                    id="name"
                    label="Nome"
                    variant="outlined"
                    {...register('name')}
                    error={!!errors?.name}
                    helperText={errors?.name?.message}
                    style={{
                        width: '100%'
                    }}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    {...register('email')}
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                    style={{
                        width: '100%'
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
                        width: '100%'
                    }}
                />
                <TextField
                    id="transactionpPassword"
                    label="Senha de transação"
                    variant="outlined"
                    type="password"
                    {...register('transactionPassword')}
                    error={!!errors?.transactionPassword}
                    helperText={errors?.transactionPassword?.message}
                    style={{
                        width: '100%'
                    }}
                />
            </Form>
            <Typography variant="body2" style={{ marginTop: '10px', textAlign: 'center' }}>
                Já tem uma conta? <Link href={APP_ROUTES.public.login}>Entrar</Link>
            </Typography>
        </div>
    )
}