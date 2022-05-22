import React from 'react';
import newsletter2 from '../../assets/images/newsletter2.png';

const Newsletter = () => {
    return (
        <div className='text-center my-20 mx-5 bg-accent p-10'>
            <img className='mx-auto' src={newsletter2} alt="" />
            <h1 className='mt-2 text-2xl'>Sign up now to receive emails for</h1>
            <h1 className='mt-2 text-2xl'>exclusive offers</h1>
            <p className='mt-2'>Sign up to receive the latest offers and discounts from Advance Auto Parts</p>
            <input type="text" placeholder="Type here" class="input input-bordered input-error w-full max-w-xs mt-2" />
            <br />
            <button class="btn btn-outline btn-secondary mt-2 text-white">Sign up</button>
        </div>
    );
};

export default Newsletter;