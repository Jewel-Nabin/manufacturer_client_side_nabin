import React from 'react';
import Advantages from './Advantages';
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
            <Advantages />
        </div>
    );
};

export default Home;