import { getTransactions, getUser } from "./api"
import { useMemoQuery } from "@/hooks/useMemoQueries";

export const useUserQuery = (userId: string | null) => {
    return useMemoQuery(
        ["user", String(userId)],
        () => userId ? getUser(userId) : Promise.reject("Nenhum ID encontrado"),
        !!userId
    );
    /* return useQuery({
        queryKey: ["user", userId],
        queryFn: () => userId ? getUser(userId) : Promise.reject("Nenhum ID encontrado"),
        enabled: !!userId,
        retry: false,
        staleTime: 1000 * 60 * 5,
    }); */
};

export const useTransactionsQuery = (userId: string | null, isEnabled: boolean) => {
    return useMemoQuery(
        ["transactions", String(userId)],
        () => userId ? getTransactions(userId) : Promise.reject("Nenhum ID encontrado"),
        isEnabled && !!userId
    );
    /* return useQuery({
        queryKey: ["transactions", userId],
        queryFn: () => userId ? getTransactions(userId) : Promise.reject("Nenhum ID encontrado"),
        enabled: isEnabled && !!userId,
        retry: false,
        staleTime: 1000 * 60 * 5,
    }); */
};