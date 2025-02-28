import { AlertComponent } from "@/components/Alert/AlertComponent";
import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { useState } from "react";
import ActionButton from "../Button/ActionnButton";
import AppIcon from "@/components/Icons/AppIcon";
import WithdrawForm from "@/components/Forms/WithdrawForm/WithdrawForm";

export default function WithdrawButton () {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <AlertProvider>
                <ActionButton 
                    label="Sacar"
                    icon={<AppIcon iconTitle="Withdrawal" />}
                    onClick={() => setIsOpen(true)}
                />
                <WithdrawForm 
                    isOpen={isOpen} onClose={() => setIsOpen(false)}
                    modalTitle="Sacar"
                />
                <AlertComponent />
            </AlertProvider>
    )
}