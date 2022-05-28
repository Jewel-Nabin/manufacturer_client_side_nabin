import React from 'react';
import Review from '../Dashboard/Review';
import Advantages from './Advantages';
import Banner from './Banner';
import Newsletter from './Newsletter';
import Parts from './Parts';
import Testimonials from './Testimonials';
import TrustedBy from './TrustedBy';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <TrustedBy />
            <Newsletter />
            <Testimonials />
            <Advantages />
        </div>
    );
};

export default Home;