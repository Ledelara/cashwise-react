import { z } from "zod";

export const transferSchema = z.object({
    amount: z.number().positive('O valor deve ser positivo').min(0.01, 'O valor mínimo é 0.01'),
    toAccountNumber: z.string({ required_error: 'O número da conta é obrigatório' }).min(3, 'O número da conta deve ter no mínimo 5 caracteres'),
});

export type Transfer = z.infer<typeof transferSchema>;