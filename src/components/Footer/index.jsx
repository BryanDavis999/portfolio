import ContactLinks from "./ContactLinks";
import ThemeIcon from "../common/ThemeIcon";

const Footer = () => {
  return (
    <footer className="h-12 flex-initial flex justify-center items-center mb-16">
      <div className="w-full px-5 py-3 max-w-screen-xl flex justify-center rounded-md glass_background">
        <div className="w-full max-w-screen-lg flex justify-between">
          <ContactLinks />
          <ThemeIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
