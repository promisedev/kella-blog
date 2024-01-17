import React from "react";
import { useState } from "react";
import BlogSchema from "./dashschema/blogschema";
import HeroSchema from "./dashschema/heroschema";
import FeatureSchema from "./dashschema/featureschema";

const ContentComp = ({content}) => {
const [active, setActive] = useState(0)
    const activePage = (e)=>{
setActive(e.currentTarget.dataset.id)
    }
   
  return (
    <section className="dash-c-schema">
      <div className="c-schema-frag1">
        <h1 className="schema-title">Content Schema</h1>
        <ul className="schema-list">
          {content.map((item, index) => (
            <li
              key={index}
              data-id={index} onClick={activePage}
              className={index == active ? "active-schema-item schema-item" : "schema-item"}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {/*------------------------------------------  */}
      <div className="c-schema-frag2">
        {/* ----------------------------------------------------- */}
        <div
          className="c-schema-cont"
          style={{
            left: `${100 * 0}%`,
            transform: `translateX(-${100 * active}%)`,
          }}
        ><BlogSchema title="Blog Schema"/></div>
        {/* ----------------------------------- */}
        <div
          className="c-schema-cont"
          style={{
            left: `${100 * 1}%`,
            transform: `translateX(-${100 * active}%)`,
          }}
        ><HeroSchema title="Hero Schema"/></div>
        {/* ----------------------------------- */}
        {/* <div
          className="c-schema-cont"
          style={{
            left: `${100 * 2}%`,
            transform: `translateX(-${100 * active}%)`,
          }}
        ><FeatureSchema/></div> */}
        {/* ------------------------------------------------------------- */}
      </div>
    </section>
  );
};

export default ContentComp;
