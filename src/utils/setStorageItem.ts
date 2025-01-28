export const setStorageItem = (key: string, value: string) => {
    if (typeof window !== 'undefined') {
        console.log('Salvando token no localStorage');
        localStorage.setItem(key, value);
    } else {
        console.log('Não é possível acessar localStorage no servidor');
    }
};
