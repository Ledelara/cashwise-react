import { useQuery } from "@tanstack/react-query"
import { getTransactions, getUser } from "./api"

export const useUserQuery = (userId: string | null) => {
    return useQuery({
        queryKey: ["user", userId],
        queryFn: () => userId ? getUser(userId) : Promise.reject("Nenhum ID encontrado"),
        enabled: !!userId,
        retry: false,
    });
};

export const useTransactionsQuery = (userId: string | null) => {
    return useQuery({
        queryKey: ["transactions", userId],
        queryFn: () => userId ? getTransactions(userId) : Promise.reject("Nenhum ID encontrado"),
        enabled: !!userId,
        retry: false,
    });
};