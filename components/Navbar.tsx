import { useTheme } from "next-themes";
import Icon from "./Icon";
import SmartLink from "./SmartLinks";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="z-50 sticky top-0 bg-light opacity-80 p-md space-x-lg flex justify-between font-display">
        <SmartLink href="/" className="text-lg text-gray-dark">
          📉 First Page
        </SmartLink>
        <nav className="">
          <ul className="flex space-x-base text-gray">
            <li>
              <SmartLink
                href="/blog"
                className="ghost"
                activeClassName="font-bold"
              >
                Blog
              </SmartLink>
            </li>
            <li>
              <SmartLink
                href="/about"
                className="ghost"
                activeClassName="font-bold"
              >
                About
              </SmartLink>
            </li>
            <li>
              <SmartLink
                href="/contact"
                className="ghost"
                activeClassName="font-bold"
              >
                Contact
              </SmartLink>
            </li>

            <li>
              <button onClick={toggleTheme}>
                {theme === "light" ? (
                  <Icon id="moon" size="sm" />
                ) : (
                  <Icon id="sun" size="sm" />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
