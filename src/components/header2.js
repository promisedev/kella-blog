import React, { useEffect, useRef, useState } from "react";
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscChevronDown } from "react-icons/vsc";
import logo1 from "../assets/logo1.png";
import { Link } from "gatsby";
import { Pages, Socials } from "../utils/metaData";
import { useGlobalContext } from "../context_api/Appcontext";
import { FaXTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

const Header = ({ floathead, float }) => {
  const [showside, setshowside] = useState(false);

  const { state } = useGlobalContext();
  // ---------------------------------

  // ------------------------------------------
  const openNav = () => {
    setshowside(true);
  };
  // ------------------------------------
  const closeNav = () => {
    setshowside(false);
  };
  // ------------------------------------------
  const dropMenu = (e) => {
    e.currentTarget.children[0].classList.add("show_header_drop");
  };
  const removeDropMenu = (e) => {
    e.currentTarget.children[0].classList.remove("show_header_drop");
  };
  // ---------------------------------
  const dropMenu2 = (e) => {
    e.currentTarget.children[1].classList.toggle("show_mobile_drop");
  };

  // ----------------------------------------------
  return (
    <section className="parent header-wrapper">
      <nav
        className={
          floathead
            ? " container header_nav2 floathead showfloathead"
            : float
            ? " container header_nav2 floathead"
            : " container header_nav2"
        }
      >
        <div className="nav_logo2">
          <img src={logo} alt="logo" />
        </div>
        {/* -------------------frag------------------------ */}
        <ul className="nav_pages2">
          {Pages().map((page, index) => (
            <>
              {page.categories ? (
                <li
                  key={index}
                  onClick={dropMenu}
                  onMouseLeave={removeDropMenu}
                >
                  <ul className="header_drop">
                    {page.categories?.map((page, index) => (
                      <li>
                        <Link to={page.link}> {page.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <span>
                    {page.title}
                    <MdArrowDropDown />
                  </span>
                </li>
              ) : (
                <li>
                  {" "}
                  <Link to={page.link}>{page.title} </Link>
                </li>
              )}
            </>
          ))}
        </ul>
        {/* ---------------------frag-------------------------------- */}
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
      </nav>
      {/* --------------------------------------------------- */}
      <nav className="mobile-header_nav">
        <div className="mobile-menu" onClick={openNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mobile_nav_logo">
          <img src={logo} alt="logo" />
        </div>
        <div></div>
      </nav>
      {/* --------------------side menu-------------------------------- */}
      <div className={showside ? "side-nav show-side-nav" : "side-nav"}>
        <div className="close-menu" onClick={closeNav}>
          <span className="cr1"></span>
          <span className="cr2"></span>
        </div>
        {/* ----------------------------------- */}
        <div className="side-logo">
          <img src={logo1} alt="logo" />
          <p></p>
        </div>
        <p className="side-desc">Welcome to Kella your favorite blog site</p>
        {/* -------------- */}
        <ul className="side_nav_pages">
          {Pages().map((page, index) => (
            <>
              {page.categories ? (
                <li key={index} onClick={dropMenu2}>
                  <span>
                    {page.title}
                    <MdArrowDropDown />
                  </span>
                  {/* ---------------------------- */}
                  <ul className="mobile_drop">
                    {page.categories?.map((page, index) => (
                      <li>
                        <Link to={page.link}> {page.title}</Link>
                      </li>
                    ))}
                  </ul>
                  {/* ---------------------------- */}
                </li>
              ) : (
                <li>
                  {" "}
                  <Link to={page.link}>{page.title} </Link>
                </li>
              )}
            </>
            // <li key={index}>
            //   {page.categories ? (
            //     <span>
            //       {page.title}
            //       <MdArrowDropDown />
            //     </span>
            //   ) : (
            //     <Link to={page.link}>{page.title} </Link>
            //   )}
            // </li>
          ))}
        </ul>
        {/* --------------------------------------- */}
        <ul className="side_nav_social">
          {Socials().map((social, index) => (
            <li key={index}>
              <a href="">
                {(index == 0 && <FaXTwitter className="s_nav-icon" />) ||
                  (index == 1 && <FaFacebookF className="s_nav-icon" />) ||
                  (index == 2 && <FaPinterestP className="s_nav-icon" />)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* ---------------------------------------- */}
    </section>
  );
};

export default Header;
