import React from 'react';
import error from '../../../assets/images/App-Error.png'

const LocalErrorPage = () => {
    return (
        <div className='w-6/12 mx-auto flex flex-col justify-center items-center p-10'>
            <h1 className='font-bold text-2xl mb-2'>the app you are looking for is not available</h1>
            <div>
                <img src={error} alt="Error" />
            </div>

        </div>
    );
};

export default LocalErrorPage;