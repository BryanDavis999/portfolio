import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa6";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();
  const lightModeEnabled = theme == "light";
  const ThemeIcon = lightModeEnabled ? FaMoon : FaSun;

  const handleThemeToggle = () => {
    setTheme(lightModeEnabled ? "dark" : "light");
  };

  return (
    <button className="mx-2" onClick={handleThemeToggle}>
      <ThemeIcon size={27} />
    </button>
  );
};

export default ThemeIcon;
