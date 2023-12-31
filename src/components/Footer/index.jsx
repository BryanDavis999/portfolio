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
    <footer className="h-12 flex-initial flex justify-center items-center mb-16">
      <div className="w-full px-5 py-3 max-w-screen-xl flex justify-center rounded-md glass_background">
        <div className="w-full max-w-screen-lg flex justify-between">
          <ContactLinks />
          <button className="mx-2" onClick={handleThemeToggle}>
            <ThemeIcon size={27} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
