import axios from "axios";
import { IRegisterUserPayload, ILoginUserPayload } from "@/types/@types";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const createUser = async (user: IRegisterUserPayload): Promise<IRegisterUserPayload> => {
    const res = await api.post<IRegisterUserPayload>("/auth/registter", user);
    return res.data;
};

export const loginUser = async (user: ILoginUserPayload): Promise<{ token: string }> => {
    const res = await api.post<{ token: string }>("/auth/login", user);
    return res.data;    
};

export default api;