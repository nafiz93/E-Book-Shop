import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;