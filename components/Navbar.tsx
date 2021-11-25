import SmartLink from "./SmartLinks";

const Navbar = () => {
  return (
    <>
      <header className="p-base space-x-lg flex justify-between">
        <SmartLink href="/" className="text-lg">
          📉 First Page
        </SmartLink>
        <nav>
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
