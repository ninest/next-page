import SmartLink from "./SmartLinks";

const Navbar = () => {
  return (
    <>
      <header className="space-x space-y flex space-x-lg">
        <SmartLink href="/" className="font-bold italic uppercase">
          Next-Page
        </SmartLink>
        <nav>
          <ul className="flex space-x-base">
            <li>
              <SmartLink href="/blog" className="ghost" activeClassName="font-bold">
                Blog
              </SmartLink>
            </li>
            <li>
              <SmartLink href="/about" className="ghost" activeClassName="font-bold">
                About
              </SmartLink>
            </li>
            <li>
              <SmartLink href="/contact" className="ghost" activeClassName="font-bold">
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
