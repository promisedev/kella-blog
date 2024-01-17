import React, { useEffect, useState } from 'react'
import Card from './card';
import { useGlobalContext } from '../context_api/Appcontext';

const Fragment1 = () => {
    const [data,setData]= useState([])
    const {state}= useGlobalContext();
    useEffect(()=>{
       
        setData(state.blogs.filter((blog,index)=>index<7))
    },[state, state.blogs])
    
  return (
    <div className="fragment1">
      {data?.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
}

export default Fragment1