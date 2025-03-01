import { Card, Typography } from "@mui/material";
import '@/styles/components/_balance-card.scss';

type BalanceCardProps = {
  balance: number;
};

export default function BalanceCard({ balance }: BalanceCardProps) {

  const formattedBalance = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(balance);

  return (
    <Card
      className="balance-card"
      variant="outlined"
    >
      <Typography variant="h6" fontWeight="bold">
        Saldo Disponível
      </Typography>
      <Typography variant="h4" fontWeight="bold" color={balance === 0 ? "error.main" : "success.main"}>
        {formattedBalance}
      </Typography>
    </Card>
  );
}
