import { useWithdraw } from "@/services/mutate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Modal, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Form from "../Form";
import { amountSchema } from "@/schemas/amountSchema";
import { z } from "zod";
import { NumericFormat } from "react-number-format";

interface WithdrawFormProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
}
type FormData = z.infer<typeof amountSchema>;

export default function WithdrawForm({ isOpen, onClose, modalTitle }: WithdrawFormProps) {

  const { handleSubmit, formState: { errors }, reset, control } = useForm<FormData>({
    resolver: zodResolver(amountSchema),
    defaultValues: { 
      amount: 0,
      transactionPassword: "",
    },
  });

  const { createWithdawMutation, loading } = useWithdraw(onClose);
  const getUserId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const onSubmit = async (data: FormData) => {
    createWithdawMutation.mutate({ 
      amount: data.amount, 
      id: getUserId ?? "", 
      transactionPassword: data.transactionPassword 
    });
  };

  useEffect(() => {
    if (!isOpen) {
      reset({ amount: 0, transactionPassword: "" });
    }
  }, [isOpen, reset]);

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby={modalTitle}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          borderRadius: "10px",
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#2a5298",
        }}
      >
        <Form
          onSubmit={handleSubmit(onSubmit)}
          buttonLabel={loading ? "Carregando..." : "Realizar saque"}
          loading={loading}
        >
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <NumericFormat
                {...field}
                customInput={TextField}
                decimalSeparator=","
                thousandSeparator="."
                decimalScale={2}
                fixedDecimalScale={true}
                allowNegative={false}
                prefix="R$ "
                value={field.value === 0 ? "R$ 0,00" : field.value}
                onValueChange={(values) => {
                  field.onChange(values.floatValue);
                }}
                label="Insira o valor do saque"
                variant="outlined"
                error={!!errors?.amount}
                helperText={errors?.amount?.message}
                style={{
                  width: "100%",
                  background: "#2a5298",
                  color: "#fff",
                }}
              />
            )}
          />
          <Controller 
            name="transactionPassword"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Senha de transação"
                variant="outlined"
                error={!!errors?.transactionPassword}
                helperText={errors?.transactionPassword?.message}
                style={{
                  width: "100%",
                  background: "#2a5298",
                  color: "#fff",
                }}
              />
            )}
          />
        </Form>
      </Box>
    </Modal>
  );
}
