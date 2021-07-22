import "../Footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer-container">
      <p className="title-footer">Contact ME | Privacy | Security</p>

      <div className="icons">
        <div className="conection-title">
          <p>Connect me</p>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/helen-trisha-laurencine-ndiaye/"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="icons-footer"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/helen.ndiaye.7"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className="icons-footer"
          />
        </a>
      </div>

      <div>
        <p className="footer-rights">
          &copy;{new Date().getFullYear()} HELENTRISHA | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
