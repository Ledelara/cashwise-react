"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createUser, depositAmount, loginUser, transferAmount, withdrawAmount } from "./api";
import { setStorageItem } from "@/utils/setStorageItem";
import { useAlert } from "@/hooks/useAlert";
import { useRouter } from "next/router";
import { APP_ROUTES } from "@/constants/app-routes";

const useCreateUser = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { showAlert } = useAlert(); 

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: () => {
      setLoading(false);
      showAlert("Usuário criado com sucesso!", "success");
    },
    onError: (error: Error) => {
      setError(error.message);
      setLoading(false);
      console.log("Error creating user", error);
      showAlert("Erro ao criar usuário", "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return { createUserMutation, error, loading };
};

const useLoginUser = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { showAlert } = useAlert();
  const { push } = useRouter();

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onMutate: () => {
        setLoading(true);
        setError(null);
    },
    onSuccess: (data) => {
        setLoading(false);
        console.log("User logged in successfully");
        console.log("Resposta completa do onSuccess:", data); 

        const token = data?.result?.token;
        const userId = data?.result?.userId;
        console.log("Token recebido:", token);
        console.log("Id do usuário:", userId);

        if (token) {
            setStorageItem("userToken", token);
        } else {
            console.log("Token não encontrado na resposta.");
        };

        if (userId) {
            setStorageItem("userId", userId);
        } else {
            console.log("Id do usuário não encontrado na resposta.");
        };

        showAlert("Usuário logado com sucesso!", "success");
        push(APP_ROUTES.private.dashboard.name);
    },
    onError: (error: Error) => {
        setError(error.message);
        setLoading(false);
        console.log("Error logging in user", error);  
        
        showAlert("Erro ao logar usuário", "error");
    },
    onSettled: () => {
        setLoading(false);
    },
});

  return { loginUserMutation, error, loading };
};

const useDeposit = (onClose: () => void) => {
  const [error, setError] = useState<string | null>(null);  
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  const createDepositMutation = useMutation({
    mutationFn: ({ amount, id, transactionPassword }: { amount: number; id: string, transactionPassword: string }) => depositAmount(amount, id, transactionPassword),
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: () => {
      setLoading(false);
      showAlert("Depósito realizado com sucesso!", "success");  
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      onClose();
    },
    onError: (error: Error) => {
      setError(error.message);
      setLoading(false);
      console.log("Error creating deposit", error);
      showAlert("Erro ao realizar depósito", "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return { createDepositMutation, error, loading };
}

const useWithdraw = (onClose: () => void) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  const createWithdawMutation = useMutation({
    mutationFn: ({ amount, id, transactionPassword }: { amount: number; id: string, transactionPassword: string }) => withdrawAmount(amount, id, transactionPassword),
    onMutate: () => {
      setLoading(true);
      setError(null); 
    },
    onSuccess: () => {
      setLoading(false);
      showAlert("Saque realizado com sucesso!", "success");
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      onClose();
    },
    onError: (error: Error) => {
      setError(error.message);
      setLoading(false);
      console.log("Error creating withdraw", error);
      showAlert("Erro ao realizar saque", "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return { createWithdawMutation, error, loading };
}

const useTransferAmount = (onClose: () => void) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  const createTransferMutation = useMutation({
    mutationFn: ({ amount, toAccountNumber, id, transactionPassword }: { amount: number; toAccountNumber: string; id: string, transactionPassword: string }) => transferAmount(amount, toAccountNumber, id, transactionPassword),
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: () => {
      setLoading(false);
      showAlert("Transferência realizada com sucesso!", "success");
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      onClose();
    },
    onError: (error: Error) => {
      setError(error.message);
      setLoading(false);
      console.log("Error creating transfer", error);
      showAlert("Erro ao realizar transferência", "error");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  return { createTransferMutation, error, loading };
}

export { 
  useCreateUser, 
  useLoginUser, 
  useDeposit, 
  useWithdraw,
  useTransferAmount,
};
