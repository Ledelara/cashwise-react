import { depositSchema } from "@/schemas/depositSchema";
import { useDeposit } from "@/services/mutate";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import Form from "../Form";

export default function DepositForm() {
    const { palette } = useTheme();

    const { register, handleSubmit, formState: { errors } } = useForm<{ amount: number }>({
        resolver: zodResolver(depositSchema),
    });

    const { createDepositMutation, loading } = useDeposit();
    const getUserId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;

    const onSubmit = async (data: { amount: number }) => {
        const formattedAmount = parseFloat(String(data.amount).replace(",", "."));
        createDepositMutation.mutate({ amount: formattedAmount, id: getUserId ?? '' });
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
                }}
                buttonLabel={loading ? 'Carregando...' : 'Depositar'}
                loading={loading}
            >
                <TextField
                    id="amount"
                    label="Valor"
                    variant="outlined"
                    type="text"
                    {...register("amount", { valueAsNumber: true })}
                    error={!!errors?.amount}
                    helperText={errors?.amount?.message}
                    style={{
                        width: "100%",
                        backgroundColor: palette.background.default,
                    }}
                />

            </Form>

        </div>
    )

}