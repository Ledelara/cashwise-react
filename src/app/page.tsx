'use client'
import { useUserQuery } from "@/services/queries";
import styles from "./page.module.css";
import ThemeButton from "@/components/Buttons/ThemeButton/ThemeButton";

export default function Home() {
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const { data: user, isLoading, isError, error } = useUserQuery(userId);

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar usuário: {error?.message}</p>;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Você está logado!</h1>
        {user && (
          <div>
            <p>Bem-vindo, {user.name}!</p>
            <p>Conta: {user.accountNumber}</p>
            <p>Saldo: {user.balance}</p>
            <ThemeButton />
          </div>
        )}
      </main>
    </div>
  );
}
