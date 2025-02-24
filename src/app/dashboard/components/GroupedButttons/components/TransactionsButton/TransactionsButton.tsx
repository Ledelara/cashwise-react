import { useState } from "react"
import ActionButton from "../Button/Button"
import AppIcon from "@/components/Icons/AppIcon"
import TransactionsTable from "@/components/Table/TransactionsTable"
import { useTransactionsQuery } from "@/services/queries"

export default function TransactionsButton() {
    const [isOpen, setIsOpen] = useState(false)
    const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
    const { data: transactions } = useTransactionsQuery(userId);

    return (
        <>
            <ActionButton
                label="Extrato"
                icon={<AppIcon iconTitle="Transactions" />}
                onClick={() => setIsOpen(true)}
            />
            <TransactionsTable
                isOpen={isOpen} onClose={() => setIsOpen(false)}
                transactions={transactions ?? []}
            />
        </>
    )
}