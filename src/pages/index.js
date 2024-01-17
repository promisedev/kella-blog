import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import { Link } from "gatsby";
import { Category } from "../utils/metaData";

import Fragment1 from "../components/fragment1";
import Fragment2 from "../components/fragment2";
const Home = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Layout>
      <Header />
      <section className=" container hero-category">
        {Category().map((item, index) => (
          <Link to={item.link} className="hero-card">
            <img src={item.image} className="hero-card-image" />
            <div className="hero-card-overlay">
              <div className="hero-card-overlay-desc">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
      {/* --------------------------------------------------- */}
      <section className=" container blog-body">
        <Fragment1 />
        {/* ------------------------------- */}
        <Fragment2/>
      </section>
    </Layout>
  );
};

export default Home;
