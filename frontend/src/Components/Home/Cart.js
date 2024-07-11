import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { removeProduct } from '../../Redux/counter/cartSlice';


const Cart = () => {
  const [cartItems,setCartItems] = useState([...useSelector(state => state.cart.cartItems)]);
  const dispatch = useDispatch();

  function handleRemove(id){
    dispatch(removeProduct(id))
    setCartItems(cartItems.filter(product => product.id != id));
  }

  return (
    <div>
      <h1 className='text-3xl text-zinc-700'>Cart Items</h1>
      <div className='m-10'>
    <TableContainer component={Paper}>
        <Table>
        <TableHead>
          <TableRow>
          <TableCell align="left">Product</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
               cartItems.length > 0 ?  cartItems.map( item  => 
                    <TableRow key={item.id}>
                        <TableCell sx={{display:'flex',alignItems:'center'

                        }}>{item.title}  <img src={item.img} className='h-[40px] ml-5'/><Button sx={{marginLeft:"50px",color:"red"}} onClick={() => handleRemove(item.id)}>Remove</Button></TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{1}</TableCell>
                        <TableCell>{item.price}</TableCell>
                    </TableRow>
                ) : <TableRow >
                    <TableCell colSpan={4} align='center'>Cart is Empty</TableCell>
                  </TableRow>
            }
        </TableBody>
        </Table>
    </TableContainer>
    </div>
    </div>
  )
}

export default Cart;