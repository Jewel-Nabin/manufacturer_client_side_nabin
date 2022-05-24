import React from 'react';
import carBanner from '../../assets/images/blog-2-1024x683.jpg';

const Banner = () => {
    return (
        <div>
            <div style={{
                background: `url(${carBanner})`,
                backgroundSize: 'cover'
            }}
                className="hero min-h-screen">
                <div className="hero-content text-center text-neutral-content text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">A new Level of Comfort
                            Tested for your Safety</h1>
                        <p className="mb-5">This is our most comprehensive vehicle treatment.</p>
                        <button className="btn btn-secondary uppercase">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;