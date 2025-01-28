import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
    email: z.string().email('Por favor, insira um email válido'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    transactionPassword: z.string().min(4, 'Senha de transação deve ter no mínimo 4 caracteres').max(4, 'Senha de transação deve ter no máximo 4 caracteres'),
});

export type User = z.infer<typeof registerSchema>;