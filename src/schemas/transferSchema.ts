import { z } from "zod";

export const transferSchema = z.object({
  amount: z
    .string()
    .min(1, "O valor é obrigatório")
    .transform((val) => {
      const sanitized = val
        .replace(/[R$\s]/g, "")
        .replace(/\./g, "")
        .replace(",", ".");
      const numberValue = Number(sanitized);
      return isNaN(numberValue) ? NaN : numberValue;
    })
    .refine((val) => !isNaN(val) && val > 0, {
      message: "O valor deve ser um número positivo",
    }),
  toAccountNumber: z
    .string({ required_error: "O número da conta é obrigatório" })
    .min(3, "O número da conta deve ter no mínimo 5 caracteres"),
  transactionPassword: z
    .string({ required_error: "A senha de transação é obrigatória" })
    .min(4, "A senha de transação deve possuir 4 caracteres"),
});

export type Transfer = z.infer<typeof transferSchema>;
