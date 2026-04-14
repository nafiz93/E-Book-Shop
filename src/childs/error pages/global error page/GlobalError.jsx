import React from 'react';
import error from '../../../assets/images/error-404.png'
const GlobalError = () => {
    return (
        <div className='w-6/12 mx-auto flex flex-col justify-center items-center p-10'>
            <h1 className='font-bold text-2xl mb-2'>page not found 404 error</h1>

            <div>
                <img src={error} alt="error image" />
            </div>
            
        </div>
    );
};

export default GlobalError;