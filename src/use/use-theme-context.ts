import { ThemeContext } from "@context";
import { useContext } from "react";

export default () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
