"use client";

import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@/contexts/Theme/ThemeContext";

export default function ThemeToggleButton() {
  const { toggleTheme, mode } = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
}
