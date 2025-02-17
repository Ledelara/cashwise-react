import { z } from "zod";

export const withdrawSchema = z.object({
    amount: z.number().positive('O valor deve ser positivo').min(0.01, 'O valor mínimo é 0.01'),
});

export type Withdraw = z.infer<typeof withdrawSchema>;