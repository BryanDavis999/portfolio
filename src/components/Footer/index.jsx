import { useTheme } from "next-themes";
import ContactLinks from "./ContactLinks";
import { FaSun } from "react-icons/fa6";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const lightModeEnabled = theme == "light";
    setTheme(lightModeEnabled ? "dark" : "light");
  };

  return (
    <footer className="h-12 flex-initial flex justify-center items-center border-t border-red-500">
      <div className="w-full max-w-6xl px-5 flex justify-between">
        <ContactLinks />
        <button className="m-2" onClick={handleThemeToggle}>
          <FaSun size={27} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
