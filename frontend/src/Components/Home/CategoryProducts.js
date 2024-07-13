import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import {Fetch} from '../Data/Fetch';
import axios from "axios";
import { Button, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const CategoryProducts = () => {
 
  const {catId} = useParams();

  const filters = useSelector(state => state.filter.filters);

  

  console.log(filters);


  const [fetched,setFetched] = useState(false);
  const [products,setProducts] = useState([]);
  const [categoryProducts,setCategoryProducts] = useState([]);
  const [searchValue,setSearchValue] = useState("");
  
  
    function handleSearchChange(e){
      setSearchValue(e.target.value);
    }
    
  

    
    useEffect(() => {
      const fetch = async () => {
        const response = await Fetch('/data');
        setProducts(response);
        setFetched(true);
        setCategoryProducts(response.filter( product => (product.catId == catId || catId === undefined) && (product.price >= parseInt(filters.price.min) && (filters.price.max == 0  || product.price <= parseInt(filters.price.max)))));
    }
    fetch();
    }, [catId,filters]);

  return (
    <div>
      <div className='flex items-center justify-center'>
        <input type='text' className='border-2 border-gray-900 m-5 w-4/5 h-10 text-2xl p-2 focus:outline-none'spellCheck={false} onChange={handleSearchChange} value={searchValue}/>
        <Button variant='contained' onClick={() => setCategoryProducts(products.filter(product => (catId === undefined || product.catId == catId) && (product.title.toLowerCase().includes(searchValue.toLowerCase()))))}>Search</Button>
      </div>
      {
        !fetched && <CircularProgress />
      }
      {
        categoryProducts.length > 0 ? categoryProducts.map((product,index) => <Card key={index} product = {product}/>) :  <p className='text-center text-2xl text-semibold'>No Results Found</p>
      }
    </div>
  )
}

export default CategoryProducts;