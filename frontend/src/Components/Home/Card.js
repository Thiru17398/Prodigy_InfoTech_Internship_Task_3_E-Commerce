import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/counter/cartSlice';

const Card = ({product}) => {
    

    const dispatch = useDispatch();

    const keys = Object.keys(product.specification);

  return (
    <div className='flex bg-gray-100 p-3 mt-3 mx-3 cursor-pointer'>
        <div>
            <img src={product.img} className='h-72 w-80' />
        </div>
        
        <div className='pl-10 w-1/2'>
            <h1 className='text-2xl font-semibold'>{product.title}</h1>
            <div className='pl-10 pt-5'>
                {
                    keys.map((key,index) => <li key={index}>{product.specification[`${key}`]}</li>)
                }
            </div>
        </div>

        <div className='w-1/5 grid items-start justify-items-center'>
                <h2 className='text-2xl font-semibold tracking-wider mx-auto'>
                    <span>&#8377;</span>
                    {product.price}
                </h2>
                <Button variant="contained" sx={{backgroundColor:"",width:"60%"}} onClick={() => dispatch(addProduct(product))}>Add to Cart</Button>
                <Button variant="contained" sx={{backgroundColor:"",width:"60%"}} onClick={() => dispatch(addProduct(product))}>Buy Now</Button>
        </div>
    </div>
  )
}

export default Card;