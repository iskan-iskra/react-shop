import { LOCAL_STORAGE_KEYS } from "@const";
import { createTheme, useMediaQuery } from "@mui/material";
import { IUseTheme } from "@types";
import { useEffect, useMemo, useState } from "react";

const defaultTheme: IUseTheme["mode"] = "light";

export default function (): IUseTheme {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const storedThemeMode = localStorage.getItem(
    LOCAL_STORAGE_KEYS.THEME_MODE_KEY
  ) as IUseTheme["mode"];

  const [mode, setMode] = useState<IUseTheme["mode"]>(
    storedThemeMode || defaultTheme
  );

  const toggleMode = (value: IUseTheme["mode"]) => {
    if (!value) return;
    setMode(value);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME_MODE_KEY, mode);
  }, [mode]);

  const themeMode = useMemo<IUseTheme["themeMode"]>(
    () => (mode === "system" ? (prefersDarkMode ? "dark" : "light") : mode),
    [mode, prefersDarkMode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return { mode, toggleMode, theme, themeMode };
}
