import React from 'react';
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Header = () => {

    const navigate = useNavigate();

    const navItems = [
        {
            name:'Home',
            route:'/',
            startIcon:<HomeIcon />
        },
        {
            name:'Cart',
            route:'/cart',
            startIcon:<ShoppingCartIcon />
        },
        {
            name:'Orders',
            route:'/orders',
            startIcon:<LocalShippingIcon />
        }
        ].map( (item , index) => {
        return <div key={index} className='text-2xl px-16 text-center w-45 cursor-pointer flex items-center text-zinc-700 hover:text-cyan-600' onClick={() => navigate(item.route)}>
            {item.startIcon}
            <h2 className='pl-2 text-center pb-1'>{item.name}</h2>
        </div>
    });

  return (
    <header className='p-5 flex justify-between border-b-2 border sticky top-0 z-50 bg-white'>
            <h1 className='text-4xl font-700 text-zinc-700 cursor-pointer' onClick={() => navigate("/")}>E-Commerce Store</h1>

            <div className='flex'>
                {
                    navItems
                }
            </div>

    </header>
  )
}

export default Header;