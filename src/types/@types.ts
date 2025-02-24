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

export interface IUser {
    name: string,
    accountNumber?: string,
    balance?: number,
    statement?: [
        {
            userId: string,
            type: string,
            amount: number,
            toAccount?: string,
        },
    ],
};

export interface ITransaction {
    userId: string;
    type: string;
    amount: number;
    toAccount?: string;
}