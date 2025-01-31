'use client'
import { useUserQuery } from "@/services/queries";
import { Box, Card, Container, Typography } from "@mui/material";
import LoadingComponent from "@/components/Loading/Loading";

export default function Dashboard() {
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const { data: user, isLoading, isError } = useUserQuery(userId);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
        <LoadingComponent isLoading={isLoading} />  
        {isError && <Typography variant="h6" component="p">Erro ao carregar usuári.</Typography>}
        {user && (
          <Card
            sx={{
              padding: 2,
              width: 500,
              height: 200,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  textAlign: "left",
                }}
              >
                Bem vindo, {user?.name}!
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  textAlign: "left",
                  fontSize: "14px",
                }}
              >
                Conta: {user?.accountNumber}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  textAlign: "right",
                }}
              >
                Saldo
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: (user?.balance ?? 0) == 0 ? "error.main" : "success.main",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textAlign: "right"
                }}
              >
                R$ {user?.balance}
              </Typography>
            </Box>
          </Card>
        )}
    </Container>
  );
}
