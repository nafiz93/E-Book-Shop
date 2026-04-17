import React, { createContext, Suspense } from 'react';
import Banner from '../../components/banner/Banner';
import Loading from '../../components/loading/Loading';
import TrendingProducts from '../trendingProducts/TrendingProducts';

export const AppContext=createContext([]);

const promisedata=fetch('/App.json')
.then(res=>res.json())



const Home = () => {
    return (
        <AppContext.Provider value={promisedata}>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
            <TrendingProducts></TrendingProducts>
            </Suspense>
        </AppContext.Provider>
    );
};

export default Home;