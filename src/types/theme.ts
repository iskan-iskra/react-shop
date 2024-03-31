import { Theme } from "@mui/material";

type TiThemeMode = "light" | "dark";

export interface IUseTheme {
  themeMode: TiThemeMode;
  mode: TiThemeMode | "system";
  theme: Theme;
  toggleMode: (value: TiThemeMode | "system") => void;
}
