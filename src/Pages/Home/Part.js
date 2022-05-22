import React from 'react';

const Part = ({ part }) => {
    const { _id, name, img, minQuantity, avQuantity, price, description } = part;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{minQuantity}</p>
                    <p>{avQuantity}</p>
                    <p>{price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            {/* <img src={img} alt="" />
            <h1>{name}</h1>
            <h1>{minQuantity}</h1>
            <h1>{avQuantity}</h1>
            <h1>{description}</h1>
            <h1>{price}</h1> */}
        </div>
    );
};

export default Part;