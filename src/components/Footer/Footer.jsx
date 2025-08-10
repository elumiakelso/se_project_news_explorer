import "./Footer.css";
import github from "../../assets/github.svg";
import facebook from "../../assets/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2025 Supersite, Powered by News API</p>
      <div className="footer__content">
        <ul className="footer__text-links">
          <li className="footer__item">
            <a href="/">Home</a>
          </li>
          <li className="footer__item">
            <a href="https://tripleten.com/">TripleTen</a>
          </li>
        </ul>
        <ul className="footer__social-links">
          <li className="footer__social-item">
            <a href="https://github.com/elumiakelso">
              <img src={github} alt="GitHub" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://facebook.com/">
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
