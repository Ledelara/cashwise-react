import { useState } from "react";
import ActionButton from "../Button/ActionnButton";
import AppIcon from "@/components/Icons/AppIcon";
import TransferForm from "@/components/Forms/TransferForm/TransferForm";

export default function TransferButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ActionButton 
                label="Transferir"
                icon={<AppIcon iconTitle="Transfer" />}
                onClick={() => setIsOpen(true)}
            />
            <TransferForm 
                isOpen={isOpen} onClose={() => setIsOpen(false)}
                modalTitle="Transferir"
            />
        </>
    )
}