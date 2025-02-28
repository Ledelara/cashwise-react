import AppIcon from "@/components/Icons/AppIcon"
import ActionButton from "../Button/ActionnButton"
import { useState } from "react"
import DepositForm from "@/components/Forms/DepositForm/DepositForm"
import { AlertProvider } from "@/contexts/AlertContext/AlertContext"
import { AlertComponent } from "@/components/Alert/AlertComponent"

export default function DepositButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <AlertProvider>
                <ActionButton
                    label="Depositar"
                    icon={<AppIcon iconTitle="Deposit" />}
                    onClick={() => setIsOpen(true)}
                />
                <DepositForm
                    isOpen={isOpen} onClose={() => setIsOpen(false)}
                    modalTitle="Depositar"
                />
                <AlertComponent />
            </AlertProvider>
        </>
    )
}