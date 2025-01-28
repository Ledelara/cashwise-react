import { getStorageItem } from "@/utils/getStorageItem";

export const checkUserAuthenticated = () => {
    const userToken = getStorageItem("userToken");
    console.log("Token armazenado no localStorage:", userToken);
    return !!userToken;
};
