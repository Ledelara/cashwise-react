import { z } from "zod";

export const amountSchema = z.object({
    amount: z
        .string()
        .min(1, "O valor é obrigatório")
        .transform((val) => {
            const sanitized = val.replace(/[R$\s]/g, "").replace(/\./g, "").replace(",", ".");
            const numberValue = Number(sanitized);
            return isNaN(numberValue) ? NaN : numberValue;
        })
        .refine((val) => !isNaN(val) && val > 0, {
            message: "O valor deve ser um número positivo",
        }),
});

export type Deposit = z.infer<typeof amountSchema>;
