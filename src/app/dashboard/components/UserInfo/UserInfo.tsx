import { Box, Button, Typography } from "@mui/material";
import AppIcon from "@/components/Icons/AppIcon";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { removeStorageItem } from "@/utils/removeStorageItem";
import ModalComponent from "@/components/Modal/ModalComponent";

type UserInfoProps = {
  name: string;
  accountNumber: string;
};

export default function UserInfo({ name, accountNumber }: UserInfoProps) {

  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();

  const logout = () => {
    removeStorageItem("userToken");
    removeStorageItem("userId");

    if (removeStorageItem("userToken") !== null && removeStorageItem("userId") !== null) {
      setIsOpen(false);
      push("/login");
    };
  };

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
      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <Button
          onClick={() => setIsOpen(true)}
          sx={{
            alignSelf: "flex-start",
            display: "inline-flex",
            minWidth: "auto",
            padding: 0,
            color: 'inherit',
          }}
        >
          <AppIcon iconTitle="Logout" />
        </Button>
        <Typography variant="body1" fontSize="16px">
          Sair
        </Typography>
      </Box>
      <ModalComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={logout}
        modalTitle="Sair"
        modalDescription="Tem certeza de que deseja sair?"
      />
    </Box>
  );
}
