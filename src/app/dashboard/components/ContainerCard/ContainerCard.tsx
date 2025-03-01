import { Card, Grid } from "@mui/material";
import { ReactNode } from "react";
import GroupedButtons from "../GroupedButttons/GroupedButtons";

type ContainerCardProps = {
  userInfo: ReactNode;
  icon: ReactNode;
  balance: ReactNode;
  isLoading: boolean;
};

export default function ContainerCard({ userInfo, icon, balance, isLoading }: ContainerCardProps) {
  return (
    <Card
      sx={{
        p: 4,
        width: "100%",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        color: "#fff",
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={8}>
          {userInfo}
        </Grid>
        <Grid item xs={4} textAlign="right">
          {icon}
        </Grid>

        <Grid item xs={12}>
          {balance}
        </Grid>
      </Grid>
      <GroupedButtons 
        isLoading={isLoading}
      />
    </Card>
  );
}
