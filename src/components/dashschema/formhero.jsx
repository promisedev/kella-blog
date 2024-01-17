import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { CategoryList } from "../../utils/metaData";
import { TfiDropbox } from "react-icons/tfi";
import { IoRemoveCircleOutline } from "react-icons/io5";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useGlobalContext } from "../../context_api/Appcontext";

const Form = ({
  name,
  formInput,
  setFormInput,
  maxLen,
  type,
  inputtype,
  setInputError,
}) => {
  const [error, setError] = useState(true);
  const [input, setInput] = useState("");
  const [islong, setIslong] = useState(false);
  const [rvalue, setValue] = useState("");
const {uploaded}= useGlobalContext()
 useEffect(() => {
   setFormInput((prev) => ({ ...prev, ads_description: [rvalue] }));
  //  console.log(rvalue);
   if (rvalue == "") {
     setError(true);
     setInputError((prev) => ({
       ...prev,
       ads_description: "This field is required",
     }));
   } else {
     setError(false);
     setInputError((prev) => ({ ...prev, ads_description: "" }));
   }
 }, [rvalue]);

//  -------------------------------------------------------
  useEffect(() => {
    setError(true);
    setInputError((prev) => ({ ...prev, [name]: "This field is required" }));
    if (name == "ads_image") {
      setFormInput((prev) => ({ ...prev, [name]: [] }));
    } else {
      setFormInput((prev) => ({ ...prev, [name]: "" }));
    }

    setFormInput((prev) => ({ ...prev, ads_description: "" }));
  }, [uploaded]);
  // ------------------------------------------------------------
  const AddInput = (e) => {
    setInput(e.currentTarget.value);
    const name = e.currentTarget.name;
    let value;
    if (name == "slug") {
      value = e.currentTarget.value?.split(" ").join("-");
    } else if (name == "ads_image") {
      value = [...e.currentTarget.files];
    } else {
      value = e.currentTarget.value;
    }
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };
  // --------------------------------------------------------------
  useEffect(() => {
    if (input == "") {
      setError(true);
      setInputError((prev)=>({...prev, [name]:"This field is required"}));
    } else {
      setError(false);
      setInputError((prev)=>({...prev, [name]:""}));
    }
    
  }, [formInput]);
// ----------------------------------------------------------------
  useEffect(() => {
    if (input.length > maxLen) {
      setIslong(true);
    } else {
      setIslong(false);
    }
  }, [formInput]);

  const Remove = (e) => {
    let id = e.currentTarget.dataset.id;
    setFormInput((prev) => {
      const image = prev.ads_image.filter((img, index) => index != id);
      return { ...prev, ads_image: image };
    });
  };
  //   -------------------------
  return (
    <fieldset className="form-fieldset">
      <label htmlFor={name} className="form-label">
        <span>{name.split("_").join(" ")}</span>
        <span className="form-label-nth">(required)</span>
      </label>
      {inputtype == "input" ? (
        <input
          type={type}
          name={name}
          id={name}
          value={formInput ? formInput[name] : ""}
          className={error ? " form-input inputerror" : "form-input"}
          onChange={AddInput}
        />
      ) : inputtype == "boolean" ? (
        <>
          <div className="bool-input">
            <input
              type={type}
              name={name}
              id="true"
              value="true"
              className="input-radio"
              onClick={AddInput}
            />
            <label htmlFor="true">True</label>
          </div>
          {/* ------------------------------------ */}
          <div className="bool-input">
            <input
              type={type}
              name={name}
              id="false"
              value="false"
              className="input-radio"
              onClick={AddInput}
            />
            <label htmlFor="false">False</label>
          </div>
        </>
      ) : inputtype == "file" ? (
        <div className="input-file-cont">
          <label htmlFor={name} className="input-file-ref">
            <TfiDropbox className="input-file-ref-icon" />
            <span>Attach image</span>
          </label>
          <input
            type={type}
            name={name}
            accept="image/*"
            multiple
            id={name}
            className="input-file"
            onChange={AddInput}
          />
          <div className="input-image-cont">
            {formInput?.ads_image?.map((file, index) => {
              let url = URL.createObjectURL(file);
              return (
                <div className="input-image">
                  <div className="input-image-ctr">
                    <IoRemoveCircleOutline
                      className="input-image-ctr-icon"
                      data-id={index}
                      onClick={Remove}
                    />{" "}
                  </div>
                  <img src={url} alt="product" />
                </div>
              );
            })}
          </div>
        </div>
      ) : inputtype == "richtext" ? (
       <div className="rich-wrapper"><ReactQuill theme="snow" value={rvalue} onChange={setValue} /></div> 
      ) : (null
        // <>
        //   {" "}
        //   {CategoryList().map((cat, index) => (
        //     <div className="bool-input">
        //       <input
        //         type={type}
        //         name={name}
        //         id={cat.slug}
        //         value={cat.slug}
        //         className="input-radio"
        //         onClick={AddInput}
        //       />
        //       <label htmlFor={cat.slug}>{cat.name}</label>
        //     </div>
        //   ))}
        // </>
      )}
      {type == "number" || type == "radio" || type == "file" ? null : (
        <div className="form-info">
          <span>{input.length} characters</span>
          <span className={islong ? "input_txt_err" : ""}>
            Maximum {maxLen} characters
          </span>
        </div>
      )}

      {error && (
        <p className="form-error">
          <MdErrorOutline /> {"  "}
          <span>Required</span>
        </p>
      )}
    </fieldset>
  );
};

export default Form;
