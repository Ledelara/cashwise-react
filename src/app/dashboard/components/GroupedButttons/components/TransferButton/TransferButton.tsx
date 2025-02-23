import { AlertProvider } from "@/contexts/AlertContext/AlertContext";
import { useState } from "react";
import ActionButton from "../Button/Button";
import AppIcon from "@/components/Icons/AppIcon";
import TransferForm from "@/components/Forms/TransferForm/TransferForm";
import { AlertComponent } from "@/components/Alert/AlertComponent";

export default function TransferButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AlertProvider>
            <ActionButton 
                label="Transferir"
                icon={<AppIcon iconTitle="Transfer" />}
                onClick={() => setIsOpen(true)}
            />
            <TransferForm 
                isOpen={isOpen} onClose={() => setIsOpen(false)}
                modalTitle="Transferir"
            />
            <AlertComponent />
        </AlertProvider>
    )
}