import ThemeContext from "context/ThemeContext";
import type { FC } from "react";
import { useContext } from "react";

const ThemeSwitch: FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const onSwitchTheme = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="bg-white dark:bg-black text-black dark:text-white border-2 p-4"
      onClick={onSwitchTheme}
    >
      Change theme
    </button>
  );
};

export default ThemeSwitch;
