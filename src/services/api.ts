import axios from "axios";
import { 
    IRegisterUserPayload, 
    ILoginUserPayload, 
    ILoginUserResponse, 
    IUser, 
    IDepositPayload 
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

export const createDeposit = async (id: string): Promise<IDepositPayload> => {
    const res = await api.post(`/user/${id}/deposit`,);
    return res.data;
}

export default api;