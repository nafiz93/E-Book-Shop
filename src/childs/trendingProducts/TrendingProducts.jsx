import React, { use, useContext } from 'react';
import { AppContext } from '../home/Home';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

const TrendingProducts = () => {

    const promsise=useContext(AppContext);

    const Alldata=use(promsise);

    const trendingdata=Alldata.filter(product=> product.downloads > 300000);

    


    return (
        <div>
            
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
             {trendingdata.map(product=> <SingleProduct key={product.id} product={product}></SingleProduct>)}
           </div>

            <button className="btn btn-primary">View All</button>
        </div>
    );
};

export default TrendingProducts;