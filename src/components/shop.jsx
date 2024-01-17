import { Link } from "gatsby";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import { CategoryList, dummyData } from "../utils/metaData";
import { useGlobalContext } from "../context_api/Appcontext";
import { VscChevronDown } from "react-icons/vsc";
import { TiThListOutline } from "react-icons/ti";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import Card1 from "./card1";
import Category from "./category";
const Shop = () => {
  const { value, setValue, state, ProductPagination, display, ChangeDisplay } =
    useGlobalContext();

  const [filterByCat, setFilterByCat] = useState("shop");
  const [filtername, setFiltername] = useState("Shop");
  const setSearch = (e, name) => {
    setFilterByCat(e.currentTarget.dataset.id);
    setFiltername(name);
  };
  const [productlist, setProductlist] = useState([]);
  //-------------------------------------------------
  useEffect(() => {
    if (filterByCat == "shop") {
      setProductlist(state.products);
      return;
    } else {
      const selected = state.products.filter(
        (item) => item.category == filterByCat
      );

      setProductlist(selected);
    }
  }, [state.products, filterByCat]);
  // ------------------------------------------------

  const dropDown = (e) => {
    e.currentTarget.children[2].classList.toggle("cat-drop");
  };
  // --------------------------------------------------------------------
  const removeDrop = (e) => {
    e.currentTarget.children[2].classList.remove("cat-drop");
  };
  // -----------------------------------------------------------------------------
  const IncreaseVal = (e) => {
    setValue(e.currentTarget.value);
  };
  // ------------------------------------------------------------------------------
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState([]);
  const [renderedProd, setRenderedProd] = useState([]);
  const LoadData = (data) => {
    const productsgroup = ProductPagination(data, 12);
    setPagination(productsgroup);
    return;
  };
  useEffect(() => {
    LoadData(productlist);
  }, [productlist, state.products]);

  useEffect(() => {
    setRenderedProd(pagination[page]);
    console.log(pagination);
  }, [pagination]);

  // --------------------------------------------------------
  useEffect(() => {
    setRenderedProd(pagination[page]);
  }, [page]);

  const getPage = (e) => {
    let x = e.currentTarget.dataset.id;
    setPage(x);
  };
  // ---------------------------------------------------------
  return (
    <section className="parent">
      <div className="parent cat-heading ">
        <div className="container cat-heading-cont">
          <Link to="/" className="c-h-link">
            <span>Home</span> <IoChevronForward className="c-h-link-icon" />
          </Link>
          <h1 className="c-h-title">Shop</h1>
        </div>
      </div>
      {/* ----------------main content-------------------------------- */}
      <section className="container category-fragment">
        {/* section1------------------------------------- */}
        <section className="cat-segment1">
          {/* ----------------category form1 */}
          <form className="category-form1">
            <input type="text" placeholder="Search products..." />
          </form>
          {/* --------------------category form2---------------------- */}

          <form className="category-form1 range">
            <label htmlFor="filter" className="cat-tag">
              Filter by price
            </label>
            <input
              type="range"
              min="25"
              max="10000"
              id="filter"
              onChange={IncreaseVal}
            />
            <div className="range-display">
              <p>Filter</p>
              <p>
                Price: <span>${parseInt(value).toLocaleString()}</span>-{" "}
                <span>$10,000</span>
              </p>
            </div>
          </form>
          <p className="cat-tag">Product Categories</p>
          {/* ------------------------------------------------- */}
          <div
            className="category-drop-cont"
            onClick={dropDown}
            onMouseLeave={removeDrop}
          >
            <p> {filtername}</p> <VscChevronDown className="cat-icon" />
            <ul className="category-drop">
              {CategoryList().map((cat, index) => (
                <li
                  key={index}
                  data-id={cat.slug}
                  onClick={(e) => setSearch(e, cat.name)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* -----------------------------section2------------------------------------- */}
        <section className="cat-segment2">
          <div className="product-controls">
            <div className="cat-cotr">
              <div
                className={
                  display == "cols" ? "cat-cotr1 active-cols" : "cat-cotr1"
                }
                onClick={() => ChangeDisplay("cols")}
              >
                <IoGridOutline
                  className={
                    display == "cols"
                      ? "menu_display active_menu_display"
                      : "menu_display"
                  }
                />
              </div>
              <div
                className={
                  display == "rows" ? "cat-cotr2 active-cols" : "cat-cotr2"
                }
                onClick={() => ChangeDisplay("rows")}
              >
                <CiGrid2H
                  className={
                    display == "cols"
                      ? "menu_display "
                      : "menu_display active_menu_display"
                  }
                />
              </div>
            </div>
            <p>Showing all {productlist?.length} results </p>
          </div>
          {/* ----------*******------------------ */}
          <Category data={CategoryList()} shop />
          {/* ------------------------------------------------- */}
          <section
            className={
              display == "cols"
                ? "category-products"
                : "category-products cat-rows"
            }
          >
            {renderedProd?.map((data, index) => (
              <Card1 data={data} display={display} />
            ))}
          </section>
          {/* ------------****************888---------------------------------- */}

          <section className="cat-pagination">
            <div className="cat-pagination-cont">
              {pagination?.map((data, index) => (
                <div
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
        </section>
      </section>
    </section>
  );
};

export default Shop;
