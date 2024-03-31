import { IUseTheme } from "@types";
import { createContext } from "react";

const ThemeContext = createContext<IUseTheme | null>(null);

export { ThemeContext };
