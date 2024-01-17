import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "gatsby";
import {
  FaRegComment,
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa6";
import { Category, Socials } from "../utils/metaData";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="parent footer-cont">
      <div className="footer-wrapper">
        <div className="footer-frag1">
          <img src={logo} alt="logo" />
          <p className="footer-info">Mail: kelly.kpaliku27@gmail.com</p>
          <p className="footer-info">Phone: +234 913 3819 860 </p>
          <p className="footer-copy">© {date} Kella, All Rights Reserved</p>

          <ul className="footer-social-cont">
            {Socials().map((link, index) => (
              <li key={index}>
                <a href="">
                  {(index == 0 && <FaXTwitter className="footer-icon" />) ||
                    (index == 1 && <FaFacebookF className="footer-icon" />) ||
                    (index == 2 && <FaPinterestP className="footer-icon" />)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* ------------------------------------------------------------ */}
        <div className="footer-frag2">
          <h3>categories</h3>
          <ul className="foot-category-cont">
            {Category().map((cat, index) => (
              <li>
                <Link to={cat.link}>{cat.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* -------------------------------------------------------------- */}
        <div className="footer-frag3"></div>
        {/* ------------------------------------------------------------- */}
      </div>
    </section>
  );
};

export default Footer;
