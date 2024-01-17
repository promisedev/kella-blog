import { Link } from "gatsby";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import { CategoryList } from "../utils/metaData";
import { useGlobalContext } from "../context_api/Appcontext";
import { VscChevronDown } from "react-icons/vsc";
import { TiThListOutline } from "react-icons/ti";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { Category } from "../utils/metaData";
import Card from "../components/card";
import Title from "../components/title";
import { LuSearch } from "react-icons/lu";
import PostCard from "../components/postcard";
import { Socials } from "../utils/metaData";
import {
  FaRegComment,
  FaXTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa6";

const Productcategory = ({ data }) => {
  const {
    state,

    ProductPagination,
  } = useGlobalContext();

  const [value, setValue] = useState("");
  const params = data.pageContext.slug;
  const [productlist, setProductlist] = useState([]);

  useEffect(()=>{
    setProductlist(state?.blogs.filter((blog)=>blog.category==params))
  },[state, state.blogs])

  //----------------------uncomment this later---------------------------
  // useEffect(() => {
  //   setProductlist(state.products?.filter((item) => item.category == params));
  // }, [state.products]);
  // ------------------------------------------------

  const dropDown = (e) => {
    e.currentTarget.children[2].classList.toggle("cat-drop");
  };
  // --------------------------------------------------------------------
  // const title = CategoryList().filter((category) => category.slug == params)[0]
  //   .name;
  // -----------------------------------------------------------------------------
  const IncreaseVal = (e) => {
    setValue(e.currentTarget.value);
  };
  // ------------------------------------------------------------------------------
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState([]);
  const [renderedProd, setRenderedProd] = useState([]);
  const LoadData = (data) => {
    const productsgroup = ProductPagination(data, 6);
    setPagination(productsgroup);
    return;
  };
  useEffect(() => {
    LoadData(productlist);
  }, [productlist, state.products]);

  useEffect(() => {
    setRenderedProd(pagination[page]);
    // console.log(pagination);
  }, [pagination]);

  // --------------------------------------------------------
  useEffect(() => {
    setRenderedProd(pagination[page]);
  }, [page]);

  const getPage = (e) => {
    let x = e.currentTarget.dataset.id;
    setPage(x);
    window.scrollTo(0,0)
  };
  // ---------------------------------------------------------
  //  const blogdata = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className="parent">
      <div className="container category-nav">
        <Link to="/">home</Link>/<span>category</span>/
        <span className="current-cat">{params}</span>
      </div>
      <section className=" container blog-body">
        <div className="fragment1">
          {/* -------------------------------------- */}
          <h1 className="category-head">{params}</h1>

          {/* --------------------------------- */}
          {renderedProd?.map((item, index) => (
            <Card data={item} />
          ))}
          {/* --------------------------------------- */}
          <section className="cat-pagination">
            <div className="cat-pagination-cont">
              {pagination?.map((data, index) => (
                <div
                  key={index}
                  className={
                    page == index ? "page-card active-page" : "page-card"
                  }
                  data-id={index}
                  onClick={getPage}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </section>
        </div>
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
            <Title title="trending post" />
            <div className="latest-post-cont">
              {state?.blogs.filter((blog, index) => index < 5)
                .map((post, index) => (
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
      </section>
    </section>
  );
};

export default Productcategory;
