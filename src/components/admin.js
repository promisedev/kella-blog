import React from "react";
import { useState } from "react";
import ContentComp from "./contentComp";
import BlogComp from "./blogComp";
import AdvertComp from "./advertComp";
import logo from "../assets/logo.png";
import { FaEdit } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { PiShoppingBag } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi2";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useGlobalContext } from "../context_api/Appcontext";
import { navigate } from "gatsby";
import { useEffect } from "react";
const Dashbord = () => {
  const { dispatch, state, loading } = useGlobalContext();
  const [active, setActive] = useState(0);
  const pages = ["content", "blogs", "adverts"];

  const content = [{ title: "blog schema" }, { title: "heroads schema" }];
  // ------------------------------------------------------------------------
  const Home = () => {
    navigate("/");
  };
  // ------------------------------------------------------------------
  useEffect(() => {
    const isuser = Object.values(state.user).length > 0;
    //console.log(isuser);
    if (isuser) {
      return;
    } else {
      navigate("/login", { replace: true });
      return;
    }
  }, [state.user]);
  // -----------------------------------------------------------------
  const activePage = (e) => {
    setActive(e.currentTarget.dataset.id);
  };
  // -------------------------------
  const Logout = () => {
    dispatch({ type: "LOG_OUT", payload: {} });
  };
  return (
    <section className="parent dash-cont">
      <section className="dash-menu">
        <img src={logo} alt="logo" className="menu-logo" />
        <ul className="dash-menu-list">
          {pages.map((page, index) => (
            <li
              className="dash-menu-item"
              onClick={activePage}
              data-id={index}
              key={index}
            >
              {(index == 0 && (
                <FaRegEdit
                  className={
                    active == index ? "dash-icon active-dash-icon" : "dash-icon"
                  }
                />
              )) ||
                (index == 1 && (
                  <IoStorefrontOutline
                    className={
                      active == index
                        ? "dash-icon active-dash-icon"
                        : "dash-icon"
                    }
                  />
                )) ||
                (index == 2 && (
                  <LiaShoppingBagSolid
                    className={
                      active == index
                        ? "dash-icon active-dash-icon"
                        : "dash-icon"
                    }
                  />
                ))}
              <span className={active == index ? "active-dash-txt" : ""}>
                {page}
              </span>
            </li>
          ))}
          <li className="dash-menu-item" onClick={Home}>
            <HiOutlineHome className="dash-icon" />{" "}
            <span className="">home</span>
          </li>
        </ul>
        <div className="dash-logout-cont">
          <button className="dash-logout" onClick={Logout}>
            Logout
          </button>
        </div>
      </section>
      {/* ---------------------*************----------------------- */}
      <section className="dash-content">
        <section
          className="dash-container"
          style={{
            left: `${100 * 0}%`,
            transform: `translateX(-${100 * active}%)`,
          }}
        >
          {<ContentComp content={content} />}
        </section>
        {/* ---------------fragment---------------------- */}
        <section
          className="dash-container"
          style={{
            left: `${100 * 1}%`,
            transform: `translateX(-${100 * active}%)`,
          }}
        >
          <BlogComp  title="all blogs" />
        </section>
        {/* ----------------------------------------------------- */}
        <section
          className="dash-container"
          style={{
            left: `${100 * 2}%`,
            transform: `translateX(-${100 * active}%)`,
          }}
        >
          <AdvertComp title="all adverts" />
        </section>
      </section>
    </section>
  );
};

export default Dashbord;
