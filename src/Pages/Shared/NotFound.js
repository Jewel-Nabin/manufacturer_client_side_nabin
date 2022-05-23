import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center p-20'>
            <h1 className='text-5xl font-bold text-secondary p-5'>404 error</h1>
            <h2 className='text-5xl p-5'>Page not found.</h2>
            <p className='p-5'>The requested URL could not be matched by routing.</p>
            <Link to={'/'}>
                <button className='text-secondary'>GO BACK TO HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default NotFound;