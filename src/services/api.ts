import axios from "axios";
import { 
    IRegisterUserPayload, 
    ILoginUserPayload, 
    ILoginUserResponse, 
    IUser,
} from "@/types/@types";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const createUser = async (user: IRegisterUserPayload): Promise<IRegisterUserPayload> => {
    const res = await api.post<IRegisterUserPayload>("/auth/register", user);
    return res.data;
};

export const loginUser = async (user: ILoginUserPayload): Promise<ILoginUserResponse> => {
    const res = await api.post("/auth/login", user);
    return res.data;
};

export const getUser = async (userId: string): Promise<IUser> => {
    const res = await api.get<IUser>(`/user/profile/${userId}`);
    return res.data;
}

export const getTransactions = async (userId: string) => {
    const res = await api.get(`/user/statement/${userId}`);
    return res.data;
}

export const depositAmount = async (amount: number, id: string) => {
    const res = await api.post(`/user/${id}/deposit`, { amount });
    return res.data;
}

export const withdrawAmount = async (amount: number, id: string) => {
    const res = await api.put(`/user/withdraw/${id}`, { amount });
    return res.data;
}

export const transferAmount = async (amount: number, toAccountNumber: string, id: string) => {
    const res = await api.post(`/user/${id}/transfer`, { amount, toAccountNumber });
    return res.data;
}

export default api;