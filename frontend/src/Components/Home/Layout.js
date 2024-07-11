import React from 'react';
import Aside from './Aside';
import Main from './Main';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
  return (
    <div>
        <Header />
        <section className='flex bg-gray-100 relative'>
            <Aside />
            <Main>
              <Outlet />
            </Main>
        </section>
    </div>
  )
}

export default Layout