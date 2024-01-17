import React from 'react'
import Blogs from './dashschema/blogs'

const ProductComp = ({title}) => {
  const data = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return <Blogs title={title} data={data} schema="blogschema"/>
}

export default ProductComp