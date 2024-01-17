import React from "react";
import FormHero from "./formhero";
import { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context_api/Appcontext";

const HeroSchema = ({ title }) => {
  const [formInput, setFormInput] = useState({});
  const [inputError, setInputError] = useState({});
  const { dispatch, loading } = useGlobalContext();
  useEffect(() => {
    // console.log(inputError);
  }, [formInput]);
  const Publish = (e) => {
    e.preventDefault();
    console.log("form input:", formInput, "Errors:", inputError);

    if (
      inputError.slug !== "" ||
      inputError.product_tag !== "" ||
      inputError.product_name !== "" ||
      inputError.description !== "" ||
      inputError.price !== "" ||
      inputError.affiliate_ref !== "" ||
      inputError.product_image !== "" ||
      inputError.side_hero !== ""
    ) {
      return null;
    } else {
      // submit form
      dispatch({ type: "UPLOAD_ADVERT", payload: formInput });
    }
  };
  return (
    <div className="schema-overlay">
      <div className="schema-overlay-head">
        <h2>{title} </h2>{" "}
        <button onClick={Publish} disabled={loading}>
          {loading ? "Uploading..." : "Publish"}
        </button>
      </div>
      <form className="schema-form" onSubmit={Publish}>
        <FormHero
          name="slug"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={200}
          type="text"
          inputtype="input"
        />
        {/* --------------------------------------- */}
        <FormHero
          name="product_tag"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={25}
          type="text"
          inputtype="input"
        />
        {/* --------------------------------------- */}
        <FormHero
          name="product_name"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={25}
          type="text"
          inputtype="input"
        />
        {/* --------------------------------------- */}
        <FormHero
          name="description"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={210}
          type="text"
          inputtype="input"
        />
        {/* --------------------------------------- */}
        <FormHero
          name="side_hero"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={210}
          type="radio"
          inputtype="boolean"
        />
        {/* ------------------------------ */}
        <FormHero
          name="price"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="number"
          inputtype="input"
        />
        {/* --------------------------------------- */}
        <FormHero
          name="affiliate_ref"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={300}
          type="text"
          inputtype="input"
        />
        {/* ------------------------------- */}

        <FormHero
          name="product_image"
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

export default HeroSchema;
