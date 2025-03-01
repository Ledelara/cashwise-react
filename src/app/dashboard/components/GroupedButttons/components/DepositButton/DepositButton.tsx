import AppIcon from "@/components/Icons/AppIcon";
import ActionButton from "../Button/ActionButton";
import { useState } from "react";
import DepositForm from "@/components/Forms/DepositForm/DepositForm";

export default function DepositButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ActionButton
        label="Depositar"
        icon={<AppIcon iconTitle="Deposit" />}
        onClick={() => setIsOpen(true)}
      />
      <DepositForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        modalTitle="Depositar"
      />
    </>
  );
}
