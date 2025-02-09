import { depositSchema } from "@/schemas/depositSchema";
import { useDeposit } from "@/services/mutate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Modal, TextField, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import Form from "../Form";

interface DepositFormProps {
    isOpen: boolean;
    onClose: () => void;
    modalTitle: string;
}

export default function DepositForm({ isOpen, onClose, modalTitle }: DepositFormProps) {
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
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby={modalTitle}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    borderRadius: '5px',
                    boxShadow: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                }}
            >
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
                        label="Insira o valor do depósito"
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
            </Box>
        </Modal>
    )

}