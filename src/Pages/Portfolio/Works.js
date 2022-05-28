import React from 'react';
import work1 from '../../assets/images/work-1.png';
import work2 from '../../assets/images/work-2.png';
import work3 from '../../assets/images/work-3.png';

const Works = () => {
    return (
        <div>
            <h1 className='text-center text-3xl mt-10'>Here is my three valued works</h1>
            <div className='grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-80 m-20'>
                <div>
                    <a href="https://jewels-sparkles.web.app/">
                        <img src={work1} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://balance-yoga-25ef2.web.app/">
                        <img src={work2} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://veganic-product-review-nabin.netlify.app/">
                        <img src={work3} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Works;