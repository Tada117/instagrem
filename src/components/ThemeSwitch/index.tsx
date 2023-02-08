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
      className="border-2 bg-white p-4 text-black dark:bg-black dark:text-white"
      onClick={onSwitchTheme}
    >
      Change theme
    </button>
  );
};

export default ThemeSwitch;
