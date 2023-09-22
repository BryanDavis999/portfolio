import { useTheme } from "next-themes";
import ContactLinks from "./ContactLinks";
import { FaSun, FaMoon } from "react-icons/fa6";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const lightModeEnabled = theme == "light";
  const ThemeIcon = lightModeEnabled ? FaMoon : FaSun;

  const handleThemeToggle = () => {
    setTheme(lightModeEnabled ? "dark" : "light");
  };

  return (
    <footer className="h-12 flex-initial flex justify-center items-center bg-orange-600 dark:bg-sky-700 mb-7">
      <div className="w-full max-w-6xl px-5 flex justify-between">
        <ContactLinks />
        <button className="m-2" onClick={handleThemeToggle}>
          <ThemeIcon size={27} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
