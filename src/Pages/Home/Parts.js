import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useParts();
    return (
        <div className='my-20 mx-5 bg-accent'>
            <div className='text-center'>
                <h1 className='text-4xl'>part<span className='text-secondary text-3xl font-bold'>Ex</span> Products</h1>
                <p className='text-2xl text-primary'>select your parts</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    />)
                }
            </div>
        </div>
    );
};

export default Parts;