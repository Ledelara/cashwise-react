"use client";

import { getStorageItem } from "@/utils/getStorageItem";
import { setStorageItem } from "@/utils/setStorageItem";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

type ThemeContextType = {
  toggleTheme: () => void;
  mode: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
}

export function ThemeProviderComponent({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    return getStorageItem("theme") as "light" | "dark" || "light";
  });

  useEffect(() => {
    setStorageItem("theme", mode);
  })

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1976d2" : "#90caf9",
          },
          background: {
            default: mode === "light" ? "#fff" : "#121212",
            paper: mode === "light" ? "#fff" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#000" : "#fff",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
