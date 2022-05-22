import React from 'react';
import carBanner from '../../assets/images/blog-2-1024x683.jpg';

const Banner = () => {
    return (
        <div>
            <div style={{
                background: `url(${carBanner})`,
                backgroundSize: 'cover'
            }}
                class="hero min-h-screen">
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">A new Level of Comfort
                            Tested for your Safety</h1>
                        <p class="mb-5">This is our most comprehensive vehicle treatment.</p>
                        <button class="btn btn-primary uppercase">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;