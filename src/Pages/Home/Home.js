import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Testimonials from './Testimonials';
import TrustedBy from './TrustedBy';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <TrustedBy />
            <Testimonials />
        </div>
    );
};

export default Home;