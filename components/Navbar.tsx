import SmartLink from "./SmartLinks";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 p-md space-x-lg flex justify-between font-display">
        <SmartLink href="/" className="text-lg">
          📉 First Page
        </SmartLink>
        <nav className="opacity-40 hover:opacity-100 transition-opacity">
          <ul className="flex space-x-base">
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
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
