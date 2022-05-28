import React from 'react';
import AboutPortfolio from './AboutPortfolio';
import MyPortfolio from './MyPortfolio';
import Works from './Works';

const Portfolio = () => {
    return (
        <div>
            <MyPortfolio />
            <AboutPortfolio />
            <Works />
        </div>
    );
};

export default Portfolio;