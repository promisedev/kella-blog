import React from "react";
import FormComp from "./formblog";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context_api/Appcontext";

const ProductSchema = ({ title }) => {
  const [formInput, setFormInput] = useState({});
  const [inputError, setInputError] = useState({});
  const {
    dispatch,
    loading,
    serverMsg,
    serverErr,
    setServerErr,
    setServerMsg,
  } = useGlobalContext();
  useEffect(() => {
    //console.log(inputError);
  }, [formInput]);
  const Publish = (e) => {
    e.preventDefault();
    //console.log("form input:", formInput, "Errors:", inputError);

    if (
      inputError.slug !== "" ||
      inputError.excerpt !== "" ||
      inputError.blog_title !== "" ||
      inputError.blog_image !== "" ||
      inputError.category !== "" ||
      inputError.tag !== "" ||
      inputError.author !== "" ||
      inputError.blog_content !== ""
    ) {
      return null;
    } else {
      // submit form
     
      dispatch({ type: "UPLOAD_BLOG", payload: formInput });
    }
  };
  return (
    <div className="schema-overlay">
      {serverErr && <div className="form_error">{serverMsg}</div>}
      <div className="schema-overlay-head">
        <h2>{title} </h2>{" "}
        <button onClick={Publish} disabled={loading}>
          {loading ? "Uploading..." : "Publish"}
        </button>
      </div>
      <form className="schema-form" onSubmit={Publish}>
        <FormComp
          name="slug"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={200}
          type="text"
          inputtype="input"
        />
        {/* --------------------------------------- */}
        <FormComp
          name="excerpt"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={125}
          type="text"
          inputtype="input"
        />
        {/* ------------------------------ */}
        <FormComp
          name="blog_title"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={50}
          type="text"
          inputtype="input"
        />
        {/* ------------------------------ */}
        {/* ------------------------------ */}
        <FormComp
          name="tag"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={30}
          type="text"
          inputtype="input"
        />
        {/* ------------------------------ */}
        <FormComp
          name="author"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={30}
          type="text"
          inputtype="input"
        />

        {/* ------------------------------ */}
        <FormComp
          name="blog_content"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="number"
          inputtype="richtext"
        />

        {/* ------------------------------- */}
        <FormComp
          name="category"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="radio"
          inputtype="category"
        />
        {/* -------------------------------- */}
        <FormComp
          name="blog_image"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="file"
          inputtype="file"
        />
        <button className="form-button" onClick={Publish} disabled={loading}>
          {loading ? "Uploading..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default ProductSchema;
