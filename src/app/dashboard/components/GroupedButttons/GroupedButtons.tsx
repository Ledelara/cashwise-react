import { Box } from "@mui/material";
import DepositButton from "./components/DepositButton/DepositButton";
import WithdrawButton from "./components/WithdrawButton/WithdrawButton";
import TransferButton from "./components/TransferButton/TransferButton";
import TransactionsButton from "./components/TransactionsButton/TransactionsButton";

export default function GroupedButtons() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '10px',
                gap: '10px',
            }}
        >
            <DepositButton />
            <WithdrawButton />
            <TransferButton />
            <TransactionsButton />
        </Box>
    )
}