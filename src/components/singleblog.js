import PostCard from "./postcard";
import { Link } from "gatsby";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import { VscChevronDown } from "react-icons/vsc";
import { TiThListOutline } from "react-icons/ti";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import image from "../assets/fashion.jpg";
import Title from "../components/title";
import { LuSearch } from "react-icons/lu";

import {
  FaRegComment,
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa6";
import { Category, Socials, handleImage } from "../utils/metaData";
import { useGlobalContext } from "../context_api/Appcontext";
import Searchcomp from "./searchcomp";
const Singleblogcomp = ({ id }) => {
  const { state } = useGlobalContext();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const date = new Date(blog?.createdAt).toDateString();
  useEffect(() => {
    console.log(id);
    setBlog(state.blogs.filter((blog) => blog.slug == id)[0]);
  }, [id, state.blogs]);

  useEffect(() => {
    const re = state.blogs
      ?.filter((item) => item.category == blog?.category)
      ?.filter((item) => item.slug !== blog?.slug)
      ?.filter((item, index) => index < 6);
    setRelated(re);
  }, [id, blog]);

  const blog_tit = blog?.blog_title;
  return (
    <>
      {blog == null ? (
        <div style={{ height: "100vh" }}></div>
      ) : (
        <section className="parent">
          <div className="container category-nav">
            <Link to="/">home</Link>/<span>category</span>/{" "}
            <Link to={`/categories/${blog?.category}`}>{blog?.category}</Link>/
            <span
              className="current-cat"
              style={{ textTransform: "capitalize" }}
            >
              {blog_tit.substring(0, 20)}...
            </span>
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
                <span style={{ textTransform: "capitalize" }}>
                  {blog?.category}
                </span>
                <span> - </span>
                <span>By:{blog?.author}</span>
              </p>
              {/* --------------------------blog content */}
              <div
                dangerouslySetInnerHTML={{ __html: blog?.blog_content }}
                className="blog-article"
              />
              {/* ---------------------------------------- */}
              <div className="blog-share-cont">
                <ul className="blog-social-cont">
                  {Socials().map((link, index) => (
                    <li
                      key={index}
                      style={{
                        background: `${
                          index == 0
                            ? "black"
                            : index == 1
                            ? "rgb(13, 4, 96)"
                            : "rgb(150, 5, 46)"
                        }`,
                      }}
                    >
                      <a
                        href=""
                        style={{ color: "white", padding: 0, margin: 0 }}
                      >
                        {(index == 0 && <FaXTwitter className="blog-icon" />) ||
                          (index == 1 && (
                            <FaFacebookF className="blog-icon" />
                          )) ||
                          (index == 2 && (
                            <FaPinterestP className="blog-icon" />
                          ))}
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
                          state?.blogs.filter(
                            (blog) => blog?.category == cat.title
                          ).length
                        }`}
                        )
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* --------------***search bar**--------------------------- */}
              <Searchcomp />
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
                          (index == 1 && (
                            <FaFacebookF className="blog-icon" />
                          )) ||
                          (index == 2 && (
                            <FaPinterestP className="blog-icon" />
                          ))}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* --------------***search bar**--------------------------- */}
              <Searchcomp />
              {/* -------------ads banner2-------------------- */}
              <div className="newsletter-cont">
                <Title title="banner" />
                <div className="ads-banner"></div>
              </div>
              {/* ________________________________________________________ */}
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default Singleblogcomp;
