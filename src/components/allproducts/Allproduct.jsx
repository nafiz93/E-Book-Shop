import React, { use, useEffect, useState } from 'react';
import SingleAllProduct from '../singleallproduct/SingleAllProduct';
import FilterProduct from '../filterProduct/FilterProduct';

const Allproduct = ({ promise }) => {

    const [data,setData]=useState([]);

    const Alldata=use(promise);
    useEffect(()=>{
        setData(Alldata);
    }, [Alldata])

 const handleSearch=(event)=>{
    const searchText=event.target.value;
    const searchTextLength=searchText.length;

    if(searchTextLength===0){
        const data=Alldata;
        return setData(data);
    }

    const filterData=Alldata.filter(product=> product.title.toLowerCase().includes(searchText.toLowerCase()));
    
    return setData(filterData);
    
 }
   

 


 
    return (
        <div>

             <div className='w-6/12 mx-auto mb-10 mt-5'>
                <h1 className='text-center font-sans text-5xl font-bold mb-3'>Our All Applications</h1>
                <p className='text-center text-[#627382] font-sans text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex justify-between p-5'>
                <h1 className='ms-5 text-xl font-bold'>{`(${data.length}) Apps Found`}</h1>

            
    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input onChange={handleSearch} type="search" required placeholder="Search" />
</label>
            </div>
<div className='grid grid-cols-3 gap-5'>

    
           {
            data.map(product=><SingleAllProduct key={product.id} product={product}></SingleAllProduct>)
           }
</div>
        </div>
    );
};

export default Allproduct;