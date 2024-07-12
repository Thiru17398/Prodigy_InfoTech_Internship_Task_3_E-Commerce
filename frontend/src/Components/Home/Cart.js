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
import { removeProduct , incrementQuantity,decrementQuantity,clearCart } from '../../Redux/cart/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const [buttonClick,setButtonClick] = useState(false);
  const totalAmount = cartItems.reduce( (acc , product) => acc + product.totalAmount , 0)

  function handleIncrement(id){
    setButtonClick(!buttonClick);
    dispatch(incrementQuantity(id));
  }

  function handleDecrement(id){
    setButtonClick(!buttonClick);
    dispatch(decrementQuantity(id));
  }

  function handleRemove(id){  
    dispatch(removeProduct(id))
  }

  async function handleOrder(){
    var response;
    await axios.post("http://localhost:5000/orderItems" , 
      {
        cardItems : cartItems,
        deliveryStatus:'Shipped',
        deliveryDate:new Date(new Date().getTime() + (24 * 60 * 60 * 1000 * 5)),
        feedBack:''
      })
    .then(res => response = res).catch(e => console.log(e));
    dispatch(clearCart());
    if(response.status === 200)
        navigate("/orders")
  }

  return (
    <div>
      <h1 className='text-3xl text-zinc-700 ml-10'>Cart Items</h1>
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
                        <TableCell >{item.quantity}<AddIcon sx={{height:"20px",cursor:'pointer'}} onClick={() => handleIncrement(item.id)}/><RemoveIcon sx={{height:"20px",cursor:'pointer'}} onClick={() => dispatch(decrementQuantity(item.id))}/></TableCell>
                        <TableCell>{item.totalAmount}</TableCell>
                    </TableRow>
                ) : <TableRow >
                    <TableCell colSpan={4} align='center'>Cart is Empty</TableCell>
                  </TableRow>
            }
            {
              cartItems && 
              <TableRow >
                     <TableCell colSpan={3}>Total Amount</TableCell>
                     <TableCell>{totalAmount}</TableCell>   
              </TableRow>
            }
        </TableBody>
        </Table>
    </TableContainer>
    <div className='flex justify-between'>
      <Button variant='contained' sx={{backgroundColor:"red",marginTop:"25px",float:'right',":hover":{backgroundColor:"darkRed"}}} onClick={() => dispatch(clearCart())} disabled={cartItems.length < 1}>Clear Cart</Button>
    <Button variant='contained' sx={{backgroundColor:"orange",marginTop:"25px",float:'right',":hover":{backgroundColor:"darkOrange"}}} disabled={cartItems.length < 1} onClick={() => handleOrder()}>Order Now</Button>
    </div>
    
    </div>
    </div>
  )
}

export default Cart;