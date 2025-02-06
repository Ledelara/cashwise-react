import { Box, Typography } from "@mui/material";
import AppIcon from "@/components/Icons/AppIcon";

type UserInfoProps = {
  name: string;
  accountNumber: string;
};

export default function UserInfo({ name, accountNumber }: UserInfoProps) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h5" fontWeight="bold">
        Olá, {name}!
      </Typography>
      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <AppIcon iconTitle="CreditCard" sx={{ fontSize: 40, opacity: 0.7 }} />
        <Typography variant="body1" fontSize="16px">
          Conta: {accountNumber}
        </Typography>
      </Box>
    </Box>
  );
}
