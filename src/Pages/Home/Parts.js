import React, { useEffect, useState } from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useParts();
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                parts.map(part => <Part
                    key={part._id}
                    part={part}
                />)
            }
        </div>
    );
};

export default Parts;