import { getStorageItem } from "@/utils/getStorageItem";

export const checkUserAuthenticated = () => {
    const userToken = getStorageItem("userToken");
    return !!userToken;
}