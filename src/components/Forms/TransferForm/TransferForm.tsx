import { transferSchema } from "@/schemas/transferSchema";
import { useTransferAmount } from "@/services/mutate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Modal, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Form from "../Form";
import { z } from "zod";
import { NumericFormat } from "react-number-format";

interface TransferFormProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
}

type FormData = z.infer<typeof transferSchema>;

export default function TransferForm({ isOpen, onClose, modalTitle }: TransferFormProps) {
    
  const { handleSubmit, formState: { errors }, reset, control } = useForm<FormData>({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      amount: 0,
      toAccountNumber: "",
    },
  });

  const { createTransferMutation, loading } = useTransferAmount();
  const getUserId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const onSubmit = async (data: FormData) => {
    createTransferMutation.mutate({
      amount: data.amount,
      toAccountNumber: data.toAccountNumber,
      id: getUserId ?? "",
    });

    if (createTransferMutation.isSuccess) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
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
          buttonLabel={loading ? "Carregando..." : "Transferir"}
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
                label="Insira o valor da transferência"
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
            name="toAccountNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Número da conta"
                variant="outlined"
                error={!!errors?.toAccountNumber}
                helperText={errors?.toAccountNumber?.message}
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
