import { ThemeContext } from "@context";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "@use";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MultiProvider({ children }: Props) {
  const themeController = useTheme();

  return (
    <>
      <ThemeContext.Provider value={themeController}>
        <ThemeProvider theme={themeController.theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
