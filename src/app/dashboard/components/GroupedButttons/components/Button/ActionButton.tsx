import { Button } from "@mui/material";

interface ActionButtonProps {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export default function ActionButton({ label, icon, onClick, disabled }: ActionButtonProps) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#fff",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                minWidth: "100px",
                borderRadius: "10px",
              }}
        >
            {icon}
            <span style={{ fontSize: 12 }}>{label}</span>
        </Button>
    )
}