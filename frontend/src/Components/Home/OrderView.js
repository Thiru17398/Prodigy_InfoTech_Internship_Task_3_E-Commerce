import React from 'react'

const OrderView = () => {
  return (
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
    </div>
  )
}

export default OrderView