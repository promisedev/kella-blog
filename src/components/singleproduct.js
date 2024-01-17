import { Link } from "gatsby";
import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { DeliveryList, dummyData, handleImage } from "../utils/metaData";
import ProductComp from "./product";
import Delivery from "./delivery";
import { useQueryParam, StringParam } from "use-query-params";

const Product = () => {
 
  let params = new URLSearchParams(document.location.search);
let category = params.get("ctg");
let product_id = params.get("id");
  console.log(category);

  const product_img = [
    { url: "", id: 1 },
    { url: "", id: 2 },
    { url: "", id: 3 },
    { url: "", id: 4 },
  ];

  const [img_ind, setImg_ind] = useState(0);
  const Activate = (e) => {
    let ind = e.currentTarget.dataset.id;
    setImg_ind(ind - 1);
  };
  // ---------------------------------------------------------
  const [pos, setPos] = useState(0);

  const activeTag = (e) => {
    console.log(e.currentTarget.parentElement.children);

    const parent = e.currentTarget.parentElement.children;
    const len = e.currentTarget.parentElement.children.length;
    for (let i = 0; i < len; i++) {
      parent[i].classList.remove("active-sum-tag");
    }
    e.currentTarget.classList.add("active-sum-tag");

    const id = e.currentTarget.dataset.id;
    setPos(id-1);
  };

  return (
    <section className="parent">
      <div className="pro-header">
        <div className="container pro-header-list">
          <Link to="/">Home</Link>
          <IoChevronForward />
          <p>Categories</p>
          <IoChevronForward />
          <Link to="/categories/audio-television">Audio & Television</Link>
          <IoChevronForward />
          <p>Iphone Max Pro</p>
        </div>
      </div>
      {/* ----------------------------------------------------- */}
      <section className="container pro-item-info-cont">
        <div className="pro-item-info-image">
          <div className="pro-image-hero">
            <img
              src={product_img[img_ind]?.url}
              alt=""
              onError={(e) => handleImage(e)}
            />
          </div>
          <div className="pro-image-list">
            {product_img
              .filter((prod, index) => index != img_ind)
              .map((prod, index) => (
                <img
                  src={prod.url}
                  alt=""
                  data-id={prod.id}
                  onClick={Activate}
                  // onError={(e) => handleImage(e)}
                  className="p-i-img"
                />
              ))}
          </div>
        </div>
        {/* --------------- */}
        <div className="pro-item-info-desc">
          <h1 className="p-i-d-txt">Desktop Cutout Mail Letter Holder</h1>
          <p className="p-i-d-desc">
            {" "}
            Uses a dictionary of over combined with a handful of model sentence
            structures, to generatein lorem Isum which looks reasonable.
          </p>
          <div className="p-i-d-price">
            <span className="p-price-discount">$345.33</span>
            <span className="p-price-actual">$235.33</span>
          </div>
          {/* ----------------------------------- */}
          <div className="p-i-d-ctr">
            <div className="pro-count">1</div>
            <div className="pro-add-cart">Add to cart</div>
            <Link to="" className="pro-buy">
              By on Amazon
            </Link>
          </div>
          <div className="pro-sub">
            <p>Category</p> <h3>Audio & Television </h3>
          </div>
          {/* <div className="pro-sub">
            <p>Category</p> <h3>Audio & Television </h3>
          </div> */}
        </div>
      </section>
      {/* --------------------------------------------------- */}
<Delivery data={DeliveryList()}/>
      {/* --------------------------------------------- */}
      <section className="container product-summary">
        <div className="product-summary-header">
          <div
            className="product-summary-tag active-sum-tag"
            onClick={activeTag}
            data-id={1}
          >
            Description
          </div>
          <div className="product-summary-tag" onClick={activeTag} data-id={2}>
            Additional Information
          </div>
          <div className="product-summary-tag" onClick={activeTag} data-id={3}>
            Vendor Info
          </div>
        </div>
        {/*------------------------------------------------------ */}
        <div className="product-summary-cont">
          {/* --------1 */}
          <div
            className="product-summary-item"
            style={{
              left: `${0 * 100}%`,
              transform: `translateX(-${pos * 100}%)`,
            }}
          >
            <p>
              Lorem Khaled Ipsum is a major key to success. Eliptical talk many
              variations passage The key to more success is to get a massage
              once a week randomised words which Don’t important, major key,
              cloth talk. Mogul talk.Eliptical talk. The standard chunk of Lorem
              Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum
              et Malorum by Cicero are also reproduced in their exact original
              accompanied.
            </p>
          </div>
          {/* ------------------2 */}
          <div
            className="product-summary-item"
            style={{
              left: `${1 * 100}%`,
              transform: `translateX(-${pos * 100}%)`,
            }}
          >
            2
          </div>
          {/* ------------------3 */}
          <div
            className="product-summary-item"
            style={{
              left: `${2 * 100}%`,
              transform: `translateX(-${pos * 100}%)`,
            }}
          >
            3
          </div>
        </div>
      </section>
      {/* -------------------------------------------------------- */}
      <section className="container related-prod">
        <ProductComp
          title={"Related Product"}
          subtitle={"See all products"}
          link={"/categories/audio-television"}
          data={dummyData()}
        />
      </section>
    </section>
  );
};

export default Product;
