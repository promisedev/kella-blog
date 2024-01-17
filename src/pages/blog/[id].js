import React from "react";
import Header from "../../components/header2";
import Layout from "../../components/layout";
import Singleblogcomp from "../../components/singleblog";
const Singleblog = ({params}) => {

  const id = params.id
  return (
    <Layout>
      <Header />
      <Singleblogcomp id={id} />
    </Layout>
  );
};

export default Singleblog;
