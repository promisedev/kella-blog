import React from 'react'
import { useGlobalContext } from '../context_api/Appcontext';
import Card from "../components/card";
import Title from "../components/title";
import { LuSearch } from "react-icons/lu";
import PostCard from "../components/postcard";
import { Category, Socials } from "../utils/metaData";
import {
  FaRegComment,
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa6";
import { Link } from 'gatsby';
const Fragment2 = () => {
    const {state} = useGlobalContext()
  return (
    <div className="fragment2">
      {/* --------------------------------- */}
      <div className="newsletter-cont">
        <Title title="newsletter" />
        <form className="newletter-form">
          <div className="form-div">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="form-div-input"
            />
          </div>
          <button>Signup for Newsletter</button>
        </form>
      </div>
      {/* ----------------------------------------- */}
      {/* -------------ads banner1-------------------- */}
      <div className="newsletter-cont">
        <Title title="banner" />
        <div className="ads-banner"></div>
      </div>
      {/* --------------***categories**--------------------------- */}
      <div className="newsletter-cont">
        <Title title="categories" />
        <ul className="category-cont">
          {Category().map((cat, index) => (
            <li>
              <Link to={cat.link}> {cat.title}</Link>
              <span>
                (
                {`${
                  state?.blogs.filter((blog) => blog?.category == cat.title)
                    .length
                }`}
                )
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* --------------***search bar**--------------------------- */}
      <form className="form-search">
        <div className="search-div">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="search-input"
          />
          <button className="search-button">
            <LuSearch />
          </button>
        </div>
      </form>
      {/* --------------*********latest post*******----------------------------- */}
      <div className="newsletter-cont">
        <Title title="latest post" />
        <div className="latest-post-cont">
          {state?.blogs.filter((blog,index)=>index>2).filter((blog,index)=>index<5).map((post, index) => (
            <PostCard data={post} />
          ))}
        </div>
      </div>
      {/* --------************social links*********************---------------- */}
      <div className="newsletter-cont">
        <Title title="find us on social" />
        <ul className="social-cont">
          {Socials().map((link, index) => (
            <li key={index}>
              <a href="">
                {(index == 0 && <FaXTwitter className="blog-icon" />) ||
                  (index == 1 && <FaFacebookF className="blog-icon" />) ||
                  (index == 2 && <FaPinterestP className="blog-icon" />)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* --------------***search bar**--------------------------- */}
      <form className="form-search">
        <div className="search-div">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="search-input"
          />
          <button className="search-button">
            <LuSearch />
          </button>
        </div>
      </form>
      {/* -------------ads banner2-------------------- */}
      <div className="newsletter-cont">
        <Title title="banner" />
        <div className="ads-banner"></div>
      </div>
      {/* ________________________________________________________ */}
    </div>
  );
}

export default Fragment2