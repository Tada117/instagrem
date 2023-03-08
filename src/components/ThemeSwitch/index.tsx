import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import ThemeContext from "context/ThemeContext";
import { useContext, useState } from "react";

const ThemeSwitch: React.FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const onSwitchTheme = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      className={`w-fit cursor-pointer items-center `}
      onClick={onSwitchTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-md transition-all ${
          theme === "light" ? "bg-gray-200" : "bg-gray-800"
        } ${isHovered ? "opacity-100" : "opacity-70"}`}
      >
        {theme === "light" ? (
          <SunIcon
            className={`h-6 w-6 text-yellow-400 ${
              isHovered ? "" : "text-opacity-50"
            }`}
          />
        ) : (
          <MoonIcon
            className={`h-6 w-6 text-gray-500 ${
              isHovered ? "" : "text-opacity-50"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitch;
