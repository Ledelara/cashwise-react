import { depositSchema } from "@/schemas/depositSchema";
import { useDeposit } from "@/services/mutate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Modal, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Form from "../Form";
import { useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { z } from "zod";

interface DepositFormProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
}

type FormData = z.infer<typeof depositSchema>;

export default function DepositForm({ isOpen, onClose, modalTitle }: DepositFormProps) {

  const { handleSubmit, formState: { errors }, reset, control } = useForm<FormData>({
    resolver: zodResolver(depositSchema),
    defaultValues: { amount: 0 },
  });

  const { createDepositMutation, loading } = useDeposit();
  const getUserId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const onSubmit = async (data: FormData) => {
    createDepositMutation.mutate({ amount: data.amount, id: getUserId ?? "" });
    if (createDepositMutation.isSuccess) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      reset({ amount: 0 });
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
          borderRadius: "5px",
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          background: "#2a5298",
        }}
      >
        <Form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            background: "#2a5298",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "300px",
          }}
          buttonLabel={loading ? "Carregando..." : "Depositar"}
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
                label="Insira o valor do depósito"
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
        </Form>
      </Box>
    </Modal>
  );
}
