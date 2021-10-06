import Logo from "../images/logo.svg";
import LanguageInput from "./LanguageInput";

const Nav = () => {
  return (
    <>
      <nav className="header__nav flex f-jc-b f-ai-c">
        <Logo />
        <div className="header__nav__cta">
          <LanguageInput />
          <a href="/login" className="btn bg-primary">
            Sign In
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
