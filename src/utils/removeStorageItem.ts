export const removeStorageItem = (key: string) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key);
    }
};