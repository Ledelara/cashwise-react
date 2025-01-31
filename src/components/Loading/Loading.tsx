import { CircularProgress } from "@mui/material";

interface LoadingComponentProps {
    isLoading: boolean;
}

export default function LoadingComponent({ isLoading }: LoadingComponentProps) {
    return (
        <>
            {isLoading && <CircularProgress />}
        </>
    );
}