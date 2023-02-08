import { createContext } from "react";

export enum THEME {
  light = "light",
  dark = "dark",
  system = "system",
}

export interface ThemeContextProps {
  theme: keyof typeof THEME;
  changeTheme: (theme: `${THEME}`) => void;
}

const defaultValue: ThemeContextProps = {
  theme: THEME.light,
  changeTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
