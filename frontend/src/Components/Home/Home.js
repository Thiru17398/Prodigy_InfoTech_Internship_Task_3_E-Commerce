import React from 'react'
import Header from '../Header';
import Aside from './Aside';
import Main from './Main';
import { Outlet } from 'react-router-dom';
import CategoryProducts from './CategoryProducts';

const Home = () => {
  return (
    <div>
        <CategoryProducts />
    </div>
  )
}

export default Home;