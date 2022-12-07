import { FC, ReactNode, useEffect, useState } from "react";
import ThemeContext, { THEME } from "./ThemeContext";

type Props = {
  children: ReactNode;
};

const ThemeContextWrapper: FC<Props> = ({ children }) => {
  const currentTheme: string | null = localStorage.getItem("theme");
  const [theme, setTheme] = useState(currentTheme || THEME.light);

  const changeTheme = (newTheme: any) => {
    setTheme(newTheme);

    newTheme === THEME.light
      ? localStorage.setItem("theme", newTheme)
      : localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme as THEME, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
