import { useState } from "react";
import ActionButton from "../Button/ActionnButton";
import AppIcon from "@/components/Icons/AppIcon";
import WithdrawForm from "@/components/Forms/WithdrawForm/WithdrawForm";

export default function WithdrawButton () {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <>
                <ActionButton 
                    label="Sacar"
                    icon={<AppIcon iconTitle="Withdrawal" />}
                    onClick={() => setIsOpen(true)}
                />
                <WithdrawForm 
                    isOpen={isOpen} onClose={() => setIsOpen(false)}
                    modalTitle="Sacar"
                />
            </>
    )
}