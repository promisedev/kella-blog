import React from "react";
import FormComp from "./formblogedit";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context_api/Appcontext";

const Productedit = ({ data }) => {
  const {
    slug,
    excerpt,
    blog_title,
    blog_image,
    category,
    tag,
    author,
    blog_content,
  } = data;
  const { loading, state } = useGlobalContext();
  const [formInput, setFormInput] = useState({ ...data });

  const [inputError, setInputError] = useState({});

  useEffect(() => {
    setFormInput(formInput);
  }, [formInput]);

  const Publish = (e) => {
    e.preventDefault();
    console.log("form input:", formInput, "Errors:", inputError);

    if (
      inputError.slug !== "" ||
      inputError.excerpt !== "" ||
      inputError.blog_title !== "" ||
      inputError.tag !== "" ||
      inputError.author !== ""
    ) {
      return null;
    } else {
      // submit form
      console.log(formInput);
    }
  };
  return (
    <div className="edit-modal-cont">
      <div className="schema-overlay-head">
        <h2>{blog_title} </h2>{" "}
        <button onClick={Publish}>
          {loading ? "Uploading..." : "Publish"}
        </button>
      </div>
      <form className="schema-form" onSubmit={Publish}>
        {/* --------------------------------------- */}
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
        {/* <FormComp
          name="category"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="radio"
          inputtype="category"
        /> */}
        {/* -------------------------------- */}
        {/* <FormComp
          name="blog_image"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="file"
          inputtype="file"
        /> */}
        <button className="form-button" onClick={Publish} disabled={loading}>
          {loading ? "Uploading..." : "Publish"}
        </button>{" "}
      </form>
    </div>
  );
};

export default Productedit;
