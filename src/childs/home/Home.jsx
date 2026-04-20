import React, { Suspense} from 'react';
import Banner from '../../components/banner/Banner';
import Loading from '../../components/loading/Loading';
import TrendingProducts from '../trendingProducts/TrendingProducts';
import { AppContext } from '../../main';





const Home = () => {

   
    return (
        
          <div>
              <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
            <TrendingProducts></TrendingProducts>
            </Suspense>
          </div>
    );
};

export default Home;