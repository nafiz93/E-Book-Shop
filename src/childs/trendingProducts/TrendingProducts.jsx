import React, { use, useContext } from 'react';

import SingleProduct from '../../components/SingleProduct/SingleProduct';
import { useNavigate } from 'react-router';
import AllProduct from '../AllProduct/AllProduct';
import { AppContext } from '../../main';

const TrendingProducts = () => {

    const navigate=useNavigate();

    const promsise=useContext(AppContext);

    const Alldata=use(promsise);

    const trendingdata=Alldata.filter(product=> product.downloads > 300000);

    const handleAllProducts=()=>navigate('/allproducts');

    


    return (
        <div className='border border-amber-300'>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
             {trendingdata.map(product=> <SingleProduct key={product.id} product={product}></SingleProduct>)}
           </div>

            <button className="btn btn-primary w-30 mt-5 mx-auto block" onClick={handleAllProducts}>
              View All
            </button>
        </div>
    );
};

export default TrendingProducts;