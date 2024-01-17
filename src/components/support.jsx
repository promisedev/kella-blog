import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Support = ({data}) => {
  return (
    <section
 className='parent'>
   <div className='container support-cont'>
{data.map((item,index)=>(
    <div className='support-item'>
        {index==0&&<TbTruckDelivery className='sp-icon'/>||index==1&&<BsCashCoin className='sp-icon'/>||index==2&&<BiSupport className='sp-icon'/>}
        <div className='support-desc'>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
        </div>
    </div>
))}
    </div> 

 </section>
  )
}

export default Support