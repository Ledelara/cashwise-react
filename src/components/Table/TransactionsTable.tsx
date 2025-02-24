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
  Pagination,
  Modal,
} from "@mui/material";
import { useState } from "react";

type TransactionsTableProps = {
  transactions: ITransaction[];
  isOpen: boolean;
  onClose: () => void;
};

export default function TransactionsTable({ transactions, isOpen, onClose }: TransactionsTableProps) {
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
          background: "#2a5298" 
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
          Histórico de Transações
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell>Conta Destino</TableCell>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(transactions ?? [])
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {transaction.type === "transfer"
                      ? "Transferência"
                      : transaction.type === "deposit"
                      ? "Depósito"
                      : "Saque"}
                  </TableCell>
                  <TableCell>{transaction.toAccount}</TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Pagination
                  count={Math.ceil((transactions?.length ?? 0) / rowsPerPage)}
                  page={page}
                  onChange={handleChangePage}
                  sx={{ margin: "auto" }}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Modal>
  );
}
