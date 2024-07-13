import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateFilter, clearFilter } from '../../Redux/filters';


const Aside = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filters,setFilters] = useState(
    {
      price:{
      min:0,
      max:0
      }
    }
  );

    const [categories,setCategories] = useState([
      {
        name:'Laptops',
        catId:1
      }, 
      {
        name:'Mobile',
        catId:2,
       },
       { 
        name:'Earphones',
        catId:3
      }
    ]);

    function handleClick(category){
      handleClearFilter();
      navigate("/categories/"+category.catId);
    }
    function handleFilters(){
      dispatch(updateFilter(filters));
    }

    function handleClearFilter(){
      setFilters({
        price:{
        min:0,
        max:0
        }
      });
      dispatch(clearFilter());
    }



  return (
    <aside className='text-2xl m-2 w-1/5 h-screen bg-white'>
      <div>
            <h2 className='text-zinc-700 p-3'>Categroies</h2>
            <div className='pl-10'>
                {
                    categories.map( (category , index) => 
                        <p className='text-[18px] text-zinc-700 cursor-pointer hover:text-cyan-600 ' key={index} onClick={() => handleClick(category)}>{category.name}</p>
                    )
                }
            </div>
      </div>
      <div className='w-max'>
      <h2 className='text-zinc-700 p-3 '>Filters</h2>
                <div className='w-max'>
                  <p className='text-zinc-700 pl-3 text-[20px]'>Price</p>
                  <div className='flex justify-between'>
                    {
                      ['Min','Max'].map((each,index) => <div key={index} className='flex'>
                        <p className='text-zinc-700 pl-3 text-[16px]'>{each} : </p>
                        <input type="num" className='text-zinc-700 pl-3 text-[16px] caret-transparent w-16 ml-2 border-2 border-gray-300 focus:outline-none'  value={parseInt(filters['price'][`${each.toLowerCase()}`])} onChange={e => setFilters({...filters ,price:{...filters['price'],[`${each}`.toLowerCase()]:e.target.value === '' ? 0 : e.target.value}})}/>
                      </div> )
                    }
                    
                  </div>
                  <Button variant="contained" sx={{width:"25px",height:"30px",margin:"20px"}} onClick={handleFilters}>Apply</Button>
                  <Button variant='contained' sx={{width:"25px",height:"30px",margin:"20px"}} onClick={handleClearFilter}>Clear</Button>  
                </div>
      </div>


    </aside>
  )
}

export default Aside;