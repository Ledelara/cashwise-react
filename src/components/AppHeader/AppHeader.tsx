import { AppBar, Box, Button, Toolbar } from "@mui/material";
import ThemeButton from "../Buttons/ThemeButton/ThemeButton";

export default function AppHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ThemeButton />
                    <Button color="inherit">SAIR</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
};