'use client'
import { useUserQuery } from "@/services/queries";
import { Box, Container, Skeleton } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ErrorMessage from "@/components/Message/ErrorMessage/ErrorMessage";
import ContainerCard from "@/app/dashboard/components/ContainerCard/ContainerCard";
import UserInfo from "./components/UserInfo/UserInfo";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import { useMemo } from "react";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { AlertComponent } from "@/components/Alert/AlertComponent";

export default function Dashboard() {

  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const { data, isLoading, isError } = useUserQuery(userId);

  const user = useMemo(() => data, [data]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        gap: 2,
      }}
    >
      <AlertProvider>
        <Container 
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {isError && <ErrorMessage message="Erro ao carregar usuário." />}

          {!isError && (
            <ContainerCard
              userInfo={
                isLoading ? (
                  <Skeleton variant="text" width={180} height={24} />
                ) : (
                  <UserInfo name={String(user?.name)} accountNumber={String(user?.accountNumber)} />
                )
              }
              icon={<AccountBalanceIcon sx={{ fontSize: 40, opacity: 0.7 }} />}
              balance={
                isLoading ? (
                  <Skeleton variant="rectangular" width={120} height={40} />
                ) : (
                  <BalanceCard balance={Number(user?.balance)} />
                )
              }
              isLoading={isLoading}
            />
          )}
        </Container>
        <AlertComponent />  
      </AlertProvider>
    </Box>
  );
}
