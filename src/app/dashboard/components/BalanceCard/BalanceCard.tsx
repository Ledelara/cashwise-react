import { Card, Typography } from "@mui/material";

type BalanceCardProps = {
  balance: number;
};

export default function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <Card
      sx={{
        p: 2,
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Saldo Disponível
      </Typography>
      <Typography variant="h4" fontWeight="bold" color={balance === 0 ? "error.main" : "success.main"}>
        R$ {balance}
      </Typography>
    </Card>
  );
}
