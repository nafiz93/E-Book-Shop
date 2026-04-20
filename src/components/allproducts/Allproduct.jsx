import React, { use } from 'react';
import SingleAllProduct from '../singleallproduct/SingleAllProduct';

const Allproduct = ({ promise }) => {

    const data=use(promise);

   
    return (
        <div>

             <div className='w-6/12 mx-auto mb-10 mt-5'>
                <h1 className='text-center font-sans text-5xl font-bold mb-3'>Our All Applications</h1>
                <p className='text-center text-[#627382] font-sans text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <h1 className='ms-5 text-xl font-bold'>{`(${data.length}) Apps Found`}</h1>
<div className='grid grid-cols-3 gap-5'>
    
           {
            data.map(product=><SingleAllProduct key={product.id} product={product}></SingleAllProduct>)
           }
</div>
        </div>
    );
};

export default Allproduct;