import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faSquareFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerIcons">
        <Link to="/">
          <FontAwesomeIcon icon={faYoutube} className="fa" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faSquareFacebook} className="fa" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faInstagram} className="fa" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faTwitter} className="fa" />
        </Link>
      </div>
      <div className="footerTop">
        <Link to="/">Conditions of Use</Link>
        <Link to="/">Privacy & Policy</Link>
        <Link to="/">Press Room</Link>
      </div>
      <div className="footerBottom">
        <p>ⓒ2023 GReen ComputerArt by WEB303 </p>
      </div>
    </div>
  );
};

export default Footer;
