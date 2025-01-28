'use client';

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createUser, loginUser } from "./api";
import { setSotrageItem } from "@/utils/setStorageItem";

const useCreateUser = () => {
    const [error, setError] = useState<string | null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);

    const createUserMutation = useMutation({
        mutationFn: createUser,
        onMutate: () => {
            setLoading(true);   
            setError(null);
        },
        onSuccess: () => {
            setLoading(false);
            console.log("User created successfully");
        },
        onError: (error: Error) => {
            setError(error.message);
            setLoading(false);
            console.log("Error creating user", error);
        },
        onSettled: () => {
            setLoading(false);
        },
    });

    return { createUserMutation, error, loading };
};

const useLoginUser = () => {
    const [error, setError] = useState<string | null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);

    const loginUserMutation = useMutation({
        mutationFn: loginUser,
        onMutate: () => {
            setLoading(true);
            setError(null);
        },
        onSuccess: ({ token }) => {
            setLoading(false);
            console.log("User logged in successfully");

            setSotrageItem("userToken", token);
        },
        onError: (error: Error) => {
            setError(error.message);
            setLoading(false);
            console.log("Error logging in user", error);    
        },
        onSettled: () => {
            setLoading(false);
        },
    });

    return { loginUserMutation, error, loading };
};

export { useCreateUser, useLoginUser };