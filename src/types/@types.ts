export interface IRegisterUserPayload {
    name: string;
    email: string;
    password: string;
    transactionPassword: string;
}

export interface ILoginUserPayload {
    email: string;
    password: string;
}

export interface ILoginUserResponse {
    message: string;
    result: {
        token: string;
        email: string;
        name: string;
        userId: string;
    };
}