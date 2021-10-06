import LanguageInput from "./LanguageInput";
function Footer() {
  return (
    <div className="container">
      <footer className="footer flex f-jc-b">
        <a href="/contact us" className="footer__top__link">
          Questions? Contact us.
        </a>
        <ul className="footer__links">
          <FooterLinksItem href="#" text="FAQ" />
          <FooterLinksItem href="#" text="Help Center" />
          <FooterLinksItem href="#" text="Account" />
          <FooterLinksItem href="#" text="Media Center" />
          <FooterLinksItem href="#" text="Investor Relations" />
          <FooterLinksItem href="#" text="Jobs" />
          <FooterLinksItem href="#" text="Ways to Watch" />
          <FooterLinksItem href="#" text="Terms of Use" />
          <FooterLinksItem href="#" text="Privacy" />
          <FooterLinksItem href="#" text="Cookie Preferences" />
          <FooterLinksItem href="#" text="Corporate Information" />
          <FooterLinksItem href="#" text="Contact Us" />
          <FooterLinksItem href="#" text="Speed Test" />
          <FooterLinksItem href="#" text="Legal Notices" />
          <FooterLinksItem href="#" text="Only on Netflix" />
        </ul>
        <LanguageInput />

        <span>Netflix Egypt</span>
      </footer>
    </div>
  );
}

function FooterLinksItem({ href, text }) {
  return (
    <>
      <li className="footer__links__item">
        <a href={href} className="footer__links__item__a">
          {text}
        </a>
      </li>
    </>
  );
}

export default Footer;
