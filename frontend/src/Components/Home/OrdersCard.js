import React, { useEffect, useState } from 'react'
import { Fetch } from '../Data/Fetch';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const OrdersCard = ({order}) => {
  console.log(order);

  return (
    <div>
      
      {
        order.cardItems.map( (item,index) => 
          <div key={index} className='flex border-2 border-gray-300 m-5 p-5 justify-around'>
            <img src={item.img} className='h-[70px] w-[70px]' />

            <div className='ml-60 justify-between flex w-2/5'>

            <div className='grid align-content-between'>
            <h1 className='text-[16px] font-semibold'>{item.title}</h1>
            <h1 className='text-[12px] font-semibold'>Quantity : {item.quantity}</h1>
            </div>


            <div className=''>
            <h1 className='text-[16px] font-semibold'><span>&#8377;</span>{item.totalAmount}</h1>
            </div>
            </div>
            
            <div  className='ml-40 grid'>

                  <h1 className='text-[16px] font-semibold flex gap-2 items-center'><FiberManualRecordIcon sx={{color:order.deliveryStatus === 'delivered' ? "green":"red" , fontSize:'medium'}}/>{order.deliveryStatus === 'delivered' ? "Delivered" :"Delivery"} on {new Date(order.deliveryDate).toLocaleString('default',{month : 'long'})} {new Date(order.deliveryDate).getDate()}</h1>
                  <h1 className='text-[12px] font-semibold flex pl-3'>Your Item has been {order.deliveryStatus}</h1>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default OrdersCard;