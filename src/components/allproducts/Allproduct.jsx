import React, { use } from 'react';
import SingleAllProduct from '../singleallproduct/SingleAllProduct';

const Allproduct = ({ promise }) => {

    const data=use(promise);

   // console.log(data);
    return (
        <div>

             <div>
                <h1>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
<div className='grid grid-cols-3'>
    
           {
            data.map(product=><SingleAllProduct key={product.id} product={product}></SingleAllProduct>)
           }
</div>
        </div>
    );
};

export default Allproduct;