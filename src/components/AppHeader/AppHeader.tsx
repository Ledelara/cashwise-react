import { AppBar, Box, Button, Toolbar } from "@mui/material";
import ThemeButton from "../Buttons/ThemeButton/ThemeButton";
import ModalComponent from "../Modal/ModalComponent";
import { useState } from "react";
import { removeStorageItem } from "@/utils/removeStorageItem";
import { useRouter } from "next/navigation";
import { checkUserAuthenticated } from "@/functions/check-user-authenticated";
import AppIcon from "../Icons/AppIcon";

export default function AppHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const { push } = useRouter();

    const authenticared = checkUserAuthenticated();

    const logout = () => {
        removeStorageItem("userToken");
        removeStorageItem("userId");

        if (removeStorageItem("userToken") !== null && removeStorageItem("userId") !== null) {
            setIsOpen(false);
            push("/login");
        };
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <ThemeButton />
                    {
                        authenticared && (
                            <Button 
                                sx={{
                                    gap: '0.5rem',
                                }}
                                color="inherit" 
                                onClick={() => setIsOpen(true)}
                            >
                                Sair
                                <AppIcon iconTitle="Logout" />
                            </Button>
                        )
                    }
                    <ModalComponent
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        onConfirm={logout}
                        modalTitle="Sair"
                        modalDescription="Tem certeza de que deseja sair?"
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
};