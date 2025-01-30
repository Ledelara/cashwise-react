"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createUser, loginUser } from "./api";
import { setStorageItem } from "@/utils/setStorageItem";
import { useAlert } from "@/hooks/useAlert";

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
      console.log("User created successfully");
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
        console.log("Token recebido:", token);

        if (token) {
            setStorageItem("userToken", token);
        } else {
            console.log("Token não encontrado na resposta.");
        };

        showAlert("Usuário logado com sucesso!", "success");
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

export { useCreateUser, useLoginUser };
