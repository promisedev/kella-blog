import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header2'
import Blogcategory from '../components/blogcategory'
const categoryTemp = (props) => {
  return (
    <Layout>
      <Header/> 
      <Blogcategory data={props}/> 
    </Layout>
  )
}

export default categoryTemp