import React, { useEffect, useState } from 'react'
import Blogs from './dashschema/blogs'
import { useGlobalContext } from '../context_api/Appcontext';

const ProductComp = ({title}) => {
const {state} = useGlobalContext()
const [data,setData]= useState([])
useEffect(()=>{
setData(state.blogs)
},[state.blogs])

  return <Blogs title={title} data={data} schema="blogschema"/>
}

export default ProductComp