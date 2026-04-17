import React from 'react';
import logo from '../../assets/images/logo.png';

const Loading = () => {
    return (
        <div>

            <h1 className='font-bold text-purple-800 text-5xl'>
                Loading...
            </h1>
            <div>
                <img src={logo} alt="Loading..." className='w-24 h-24 animate-spin' />
            </div>
        </div>
    );
};

export default Loading;