export const setSotrageItem = (key: string, value: string) => {
    if (typeof window === 'undefined') {
        localStorage.setItem(key, value);
    }
};