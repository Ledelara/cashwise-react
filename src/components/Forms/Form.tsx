import { Button, Container } from "@mui/material";
import { ReactNode } from "react";

interface FormProps {
    children: ReactNode;
    style: React.CSSProperties;
    buttonLabel: string;
    loading?: boolean;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ children, style, buttonLabel, loading, onSubmit }: FormProps) {
    return (
        <Container
            style={style}
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
        </Container>
    )
};