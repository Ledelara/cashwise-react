export const getStorageItem = (key: string) => {  
    /* if (typeof window === 'undefined') {
        return localStorage.getItem(key);
    } */

    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
    
    return null;
};