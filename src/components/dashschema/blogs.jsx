import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import Blogedit from "./blogedit";
import Advertedit from "./advertedit";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
const Blogs = ({ title, data, schema }) => {
  const [isediting, setIsediting] = useState(false);
  const showOverlay = (e) => {
    e.currentTarget.parentElement.children[1].classList.add(
      "show-af-ctr-overlay"
    );
  };

  const removeOverlay = (e) => {
    e.currentTarget.classList.remove("show-af-ctr-overlay");
  };

  const Editing = (e) => {
    e.currentTarget.parentElement.classList.remove("show-af-ctr-overlay");
    setIsediting(true);
  };

  const CloseModal = (e) => {
    setIsediting(false);
  };

  // ------------------------------dummy data
  const selected_product = {
    product_title: "iphone 15",
    product_price: 40.5,
    on_discount: false,
    discount: 0,
    affiliate_partner: "amazon",
    affiliate_link: "https://amazon.com",
    excerpt: "some dummy description about the product",
  };
  //   --------------------------------------
  return (
    <section className="dash-all-product-cont">
      <h2 className="dash-product-title">{title}</h2>
      {/* ----------------------------------- */}
      <form className="product-search">
        <input type="text" placeholder="Type to search for entries" />
      </form>
      {/* ---------------------------------------- */}
      <div className="dash-table-cont">
        <table className="dash-table">
          <tr>
            <th>Name</th>
            <th>Content Type</th>
            <th>Updated</th>
            <th> Status</th>
            <th>
              <IoSettingsOutline />
            </th>
          </tr>

          {/* ------------------------------------- */}
          {data?.map((item, index) => (
            <tr key={index}>
              <td>iphone 15</td>
              <td>product schema</td>
              <td> 18 Dec 2022</td>
              <td>
                {" "}
                <span
                  className={
                    true
                      ? "af-link-status af-link-status-expire"
                      : "af-link-status"
                  }
                >
                  expired
                </span>
              </td>
              <td className=" af-ctr-cont">
                <BsThreeDots className=" af-ctr" onClick={showOverlay} />
                <div className=" af-ctr-overlay" onMouseLeave={removeOverlay}>
                  <p className="af-ctr-txt" onClick={Editing}>
                    <LiaEditSolid className=" af-ctr-icon" />
                    Edit
                  </p>
                  <p className="af-ctr-txt af-ctr-del">
                    <MdDeleteOutline className=" af-ctr-icon" />
                    Delete
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {isediting ? (
        <div className="edit-modal">
          <div className="edit-modal-ctr " onClick={CloseModal}>
            <p>Close Modal</p>
          </div>
          {schema == "productschema" ? (
            <Blogedit data={selected_product} />
          ) : (
            <Advertedit data={selected_product} />
          )}
        </div>
      ) : null}
    </section>
  );
};

export default Blogs;
