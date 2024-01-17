import React from "react";
import FormComp from "./formhero";
import { useState } from "react";
import { useEffect } from "react";

const Advertedit = ({ data }) => {
  const {
    excerpt,
    product_title,
    product_price,
    on_discount,
    discount,
    affiliate_partner,
    affiliate_link,
  } = data;

  const [formInput, setFormInput] = useState({});
  const [inputError, setInputError] = useState({});

  useEffect(() => {
    setFormInput(data);
  }, [formInput]);

  const Publish = (e) => {
    e.preventDefault();
    console.log("form input:", formInput, "Errors:", inputError);

    if (
      inputError.excerpt !== "" ||
      inputError.product_title !== "" ||
      inputError.product_price !== "" ||
      inputError.on_discount !== "" ||
      inputError.discount !== "" ||
      inputError.affiliate_partner !== "" ||
      inputError.affiliate_link !== "" ||
      inputError.link_expiry_date !== ""
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
        <h2>{product_title} </h2> <button onClick={Publish}>Publish</button>
      </div>
      <form className="schema-form" onSubmit={Publish}>
        {/* --------------------------------------- */}
        <FormComp
          name="excerpt"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={210}
          type="text"
          inputtype="input"
        />
        {/* ------------------------------ */}
        <FormComp
          name="product_title"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="text"
          inputtype="input"
        />
        {/* ------------------------------ */}
        <FormComp
          name="product_price"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="number"
          inputtype="input"
        />
        {/* --------------------------------------- */}
        <FormComp
          name="affiliate_link"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={300}
          type="text"
          inputtype="input"
        />
        {/* ------------------------------- */}
        <FormComp
          name="link_expiry_date"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={12}
          type="date"
          inputtype="input"
        />
        {/* ------------------------------- */}
        {/* --------------------------------------- */}
        <FormComp
          name="affiliate_partner"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="text"
          inputtype="input"
        />
        <FormComp
          name="on_discount"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="radio"
          inputtype="boolean"
        />
        {/* -------------------------------- */}
        <FormComp
          name="discount"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="number"
          inputtype="input"
        />
        {/* -------------------------------- */}

        <FormComp
          name="product_images"
          formInput={formInput}
          setFormInput={setFormInput}
          setInputError={setInputError}
          maxLen={100}
          type="file"
          inputtype="file"
        />
        <button className="form-button" onClick={Publish}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Advertedit;
