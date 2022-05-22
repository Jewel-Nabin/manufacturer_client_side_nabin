import React from 'react';
import recognition from '../../assets/images/recognition.jpg';
import goal from '../../assets/images/goal.png';
import reviews from '../../assets/images/reviews.png';

const Advantages = () => {
    return (
        <div className='my-20 mx-5 bg-accent p-10'>
            <h1 className='text-4xl text-center mb-10'>Why Choose <span className='font-bold'>part<span className='text-secondary'>Ex</span></span> Products?</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img src="https://i.ibb.co/L80k2d6/savve-Money.webp" alt="" />
                        <h2 class="card-title">Affordable Rates</h2>
                        <p>Repairing a damaged vehicle can be expensive. Using the aftermarket products is a good solution if you're on a budget</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-96' src={recognition} alt="" />
                        <h2 class="card-title">Original Products</h2>
                        <p>Only reliable parts from trusted Aftermarket brands</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-24' src={goal} alt="" />
                        <h2 class="card-title">Wide variety</h2>
                        <p>We have something for everyone when it comes to aftermarket products. Just apply the "Aftermarket" filter in the catalogue and check the offers</p>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='w-24' src={reviews} alt="" />
                        <h2 class="card-title">Customer Support</h2>
                        <p>If you still need to contact us please complete the form and we’ll be in touch right away.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;