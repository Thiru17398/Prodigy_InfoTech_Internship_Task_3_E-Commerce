import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter , Route , Routes, Navigate } from 'react-router-dom';
import Cart from './Components/Home/Cart';
import Orders from './Components/Home/Orders';
import CategoryProducts from './Components/Home/CategoryProducts';
import Layout from './Components/Home/Layout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/categories/:catId' element={<CategoryProducts />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/orders' element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
