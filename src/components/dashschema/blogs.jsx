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
import { useGlobalContext } from "../../context_api/Appcontext";
const Blogs = ({ title, data, schema }) => {
  const [isediting, setIsediting] = useState(false);
  const { state } = useGlobalContext();
  const showOverlay = (e) => {
    e.currentTarget.parentElement.children[1].classList.add(
      "show-af-ctr-overlay"
    );
  };

  const removeOverlay = (e) => {
    e.currentTarget.classList.remove("show-af-ctr-overlay");
  };
  const [selected_product, setSelected_product] = useState({});
  const Editing = (e) => {
    e.currentTarget.parentElement.classList.remove("show-af-ctr-overlay");
    const slug = e.currentTarget.dataset.id;
    setIsediting(true);
    const blog = state?.blogs.filter((blog) => blog.slug == slug)[0];
    console.log(blog);
    setSelected_product(blog);
  };

  const CloseModal = (e) => {
    setIsediting(false);
  };

  // ------------------------------dummy data
  const Search = (e) => {
    e.preventDefault();
  };
  //   --------------------------------------
  return (
    <section className="dash-all-product-cont">
      <h2 className="dash-product-title">{title}</h2>
      {/* ----------------------------------- */}
      <form className="product-search" onSubmit={Search}>
        <input type="text" placeholder="Type to search for entries" />
      </form>
      {/* ---------------------------------------- */}
      <div className="dash-table-cont">
        <table className="dash-table">
          <tr>
            <th>Name</th>
            <th>Content Type</th>
            <th>Updated</th>
            {/* <th> Status</th> */}
            <th>
              <IoSettingsOutline />
            </th>
          </tr>

          {/* ------------------------------------- */}
          {data?.map((item, index) => {
            const date = new Date(item?.createdAt).toDateString();
            return (
              <tr key={index} className="blog_t_row">
                <td className="blog_t_title">{item?.blog_title}</td>
                <td>blog schema</td>
                <td>{date}</td>
                {/* <td>
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
                </td> */}
                <td className=" af-ctr-cont">
                  <BsThreeDots className=" af-ctr" onClick={showOverlay} />
                  <div className=" af-ctr-overlay" onMouseLeave={removeOverlay} onTouchMove={removeOverlay}>
                    <p
                      className="af-ctr-txt"
                      data-id={item.slug}
                      onClick={Editing}
                    >
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
            );
          })}
        </table>
      </div>
      {isediting ? (
        <div className="edit-modal">
          <div className="edit-modal-ctr " onClick={CloseModal}>
            <p>Close Modal</p>
          </div>
          {schema == "blogschema" ? (
            <Blogedit data={selected_product} setIsediting={setIsediting} />
          ) : (
            <Advertedit data={selected_product} setIsediting={setIsediting} />
          )}
        </div>
      ) : null}
    </section>
  );
};

export default Blogs;
