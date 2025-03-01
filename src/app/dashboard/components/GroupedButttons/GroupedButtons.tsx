import { Box, Skeleton } from "@mui/material";
import DepositButton from "./components/DepositButton/DepositButton";
import WithdrawButton from "./components/WithdrawButton/WithdrawButton";
import TransferButton from "./components/TransferButton/TransferButton";
import TransactionsButton from "./components/TransactionsButton/TransactionsButton";

interface GroupedButtonsProps {
    isLoading: boolean;
}

export default function GroupedButtons({ isLoading }: GroupedButtonsProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '10px',
                gap: '10px',
            }}
        >
            {isLoading ? (
                <Skeleton variant="rectangular" width={120} height={40} />
            ) : (
                <>
                    <DepositButton />
                    <WithdrawButton />
                    <TransferButton />
                    <TransactionsButton />
                </>
            )}
        </Box>
    )
}