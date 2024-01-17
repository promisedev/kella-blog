import PostCard from "./postcard";
import { Link } from "gatsby";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import { VscChevronDown } from "react-icons/vsc";
import { TiThListOutline } from "react-icons/ti";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import image from "../assets/fashion.jpg"
import Title from "../components/title";
import { LuSearch } from "react-icons/lu";

import {
  FaRegComment,
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa6";
import { Category, Socials ,handleImage} from "../utils/metaData";
import { useGlobalContext } from "../context_api/Appcontext";
const Singleblogcomp = ({id}) => {

  const {state}= useGlobalContext()
  const [blog, setBlog]= useState({})
  const [related,setRelated]=useState([])
const date = new Date(blog?.createdAt).toDateString();
  useEffect(()=>{
    console.log(id)
    setBlog(state.blogs.filter((blog)=>blog.slug==id)[0])
  },[id,state.blogs])

 useEffect(()=>{   
    const re = state.blogs?.filter((item)=>item.category==blog?.category)?.filter((item)=>item.slug !==blog?.slug)?.filter((item,index)=>index<6)
    setRelated(re)
  },[id,blog])


  
  return (
    <section className="parent">
      <div className="container category-nav">
        <Link to="/">home</Link>/<span>category</span>/{" "}
        <Link to={`/categories/${blog?.category}`} >{blog?.category}</Link>/
        <span className="current-cat">{blog?.blog_title}</span>
      </div>
      <section className=" container blog-body">
        <article className="fragment1">
          {/* -------------------------------------- */}
          <img
            src={blog?.blog_image?.[0]}
            alt={blog?.blog_title}
            className="single-blog-image"
            onError={(e) => handleImage(e)}
          />
          <h1 className="single-blog-title">{blog?.blog_title}</h1>
          <p className="single-blog-info">
            <span>{date}</span>
            <span> - </span>
            <span>{blog?.category}</span>
            <span> - </span>
            <span>By:{blog?.author}</span>
          </p>
          {/* --------------------------blog content */}
          <div dangerouslySetInnerHTML={{ __html: blog?.blog_content }} />
          {/* ---------------------------------------- */}
          <div className="blog-share-cont">
            <ul className="blog-social-cont">
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
        </article>
        {/* ------------------------------- */}
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
            <Title title="related post" />
            <div className="latest-post-cont">
              {related?.map((post, index) => (
                <PostCard data={post} key={index} />
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
      </section>
    </section>
  );
};

export default Singleblogcomp;
