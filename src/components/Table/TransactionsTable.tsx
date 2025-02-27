"use client";
import { ITransaction } from "@/types/@types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TableFooter,
  Modal,
} from "@mui/material";
import { useState } from "react";
import PaginationComponent from "../Pagination/Pagination";

type TransactionsTableProps = {
  transactions: ITransaction[];
  isOpen: boolean;
  onClose: () => void;
};

export default function TransactionsTable({
  transactions,
  isOpen,
  onClose,
}: TransactionsTableProps) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <TableContainer
        component={Paper}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 650,
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
        <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
          Histórico de Transações
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>Tipo</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Conta Destino</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Valor</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(transactions ?? [])
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: "center" }}>
                    {transaction.type === "transfer"
                      ? "Transferência"
                      : transaction.type === "deposit"
                      ? "Depósito"
                      : "Saque"}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{transaction.toAccount ? transaction.toAccount : 'Sem transação entre contas.'}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {new Intl.DateTimeFormat("pt-BR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    }).format(new Date(transaction.timestamp))}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} align="center">
                <PaginationComponent
                  count={Math.ceil((transactions?.length ?? 0) / rowsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                  style={{ margin: "auto" }}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Modal>
  );
}
