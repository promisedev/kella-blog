import React, { useEffect, useRef, useState } from "react";
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscChevronDown } from "react-icons/vsc";
import { Link } from "gatsby";
import { Pages, Socials } from "../utils/metaData";
import { useGlobalContext } from "../context_api/Appcontext";
import { FaXTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import HeaderComp from "./header2";
const Header = () => {
  // ------------------------------------------
  const [floathead, setFloathead] = useState(false);
  const [showside, setshowside] = useState(false);
  const nav = useRef(null);
  const { state } = useGlobalContext(); // ---------------------------------
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = nav.current?.getBoundingClientRect().top;

      if (position < -280) {
        setFloathead(true);
      } else {
        setFloathead(false);
      }
    });
  }, []);
  // ------------------------------------------
  const openNav = () => {
    setshowside(true);
  };
  // ------------------------------------
  const closeNav = () => {
    setshowside(false);
  };
  return (
    <section className="parent header-wrapper">
      <HeaderComp floathead={floathead} float />
      <nav className="header_nav" ref={nav}>
        <div className="nav_pages_cont">
          <ul className="nav_pages">
            {Pages().map((page, index) => (
              <li key={index}>
                {page.categories ? (
                  <span>
                    {page.title}
                    <MdArrowDropDown />
                  </span>
                ) : (
                  <Link to={page.link}>{page.title} </Link>
                )}
              </li>
            ))}
          </ul>
          <ul className="nav_social">
            {Socials().map((social, index) => (
              <li key={index}>
                <a href="">
                  {(index == 0 && <FaXTwitter className="nav-icon" />) ||
                    (index == 1 && <FaFacebookF className="nav-icon" />) ||
                    (index == 2 && <FaPinterestP className="nav-icon" />)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav_logo">
          <img src={logo} alt="logo" />
          <p></p>
        </div>
      </nav>
      {/* ---------------mobile heeader--------------------------- */}

      {/* ---------------------------------------- */}
    </section>
  );
};

export default Header;
