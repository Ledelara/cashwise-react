import { AppBar, Box, Button, Toolbar } from "@mui/material";
import ThemeButton from "../Buttons/ThemeButton/ThemeButton";

export default function AppHeader() {
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
                    <Button color="inherit">Sair</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
};