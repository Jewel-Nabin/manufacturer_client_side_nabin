import React, { useState } from 'react';
import useParts from '../../hooks/useParts';
import Part from '../Home/Part';
import PurchasingModal from './PurchasingModal';

const Purchase = () => {
    const [parts, setParts] = useParts();
    const [product, setProduct] = useState(null);

    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                        setProduct={setProduct}
                    />)
                }
            </div>
            {product && <PurchasingModal
                product={product}
                setProduct={setProduct}
            />}
        </div>
    );
};

export default Purchase;