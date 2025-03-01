import { Box, Button, useTheme } from "@mui/material";
import { ReactNode } from "react";
import '@/styles/_globals.scss';

interface FormProps {
    children: ReactNode;
    buttonLabel: string;
    loading?: boolean;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ children, buttonLabel, loading, onSubmit }: FormProps) {
    const { palette } = useTheme();

    return (
        <Box
            style={{
                backgroundColor: palette.background.paper,
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                width: '300px',
                background: "rgba(255, 255, 255, 0.1)",
            }}
        >
            <form
                onSubmit={onSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%'
                }}
            >
                {children}
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{
                        width: '100%'
                    }}
                    disabled={loading}
                >
                    {buttonLabel}
                </Button>
            </form>
        </Box>
    )
};