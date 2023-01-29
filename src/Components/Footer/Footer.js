import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="social-icon d-flex align-items-center">
        <div className="facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className="twitter">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </div>
        <div className="instagram">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </div>
        <div className="github">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </div>
      </div>
      <div className="support">
        <ul className="">
          <li>
            <p className="text-muted">Photography</p>
          </li>
          <li>Contact us</li>
          <li>FAQ</li>
          <li>Download</li>
          <li>Locate a Dealer</li>
          <li>Product Registration</li>
          <li>Spare Parts</li>
        </ul>
      </div>
      <div className="photographer">
        <ul className="">
          <li>
            <p className="text-muted">Journalism</p>
          </li>
          <li>About Journalism</li>
          <li>About Photography</li>
          <li>About John Smith</li>
          <li>Newsroom</li>
          <li>Carrier</li>
        </ul>
      </div>
      <div className="stay-up-to-date d-flex flex-column">
        <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span className="ms-2">Stay up to date in latest from John Smith</span></p>
        <input type="email" placeholder="Enter your email address"/>
        <button className="signup-btn">Sign Up</button>
      </div>
    </footer>
  );
};

export default Footer;
