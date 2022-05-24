import React from 'react';

const Part = ({ part, setProduct }) => {
    const { _id, name, img, minQuantity, avQuantity, price, description } = part;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-neutral">{name}</h2>
                    <p>{description}</p>
                    <p> <small>Minimum Order Quantity:</small> {minQuantity}</p>
                    <p> <small>Available Quantity:</small> {avQuantity}</p>
                    <p> <small>Price:</small> ${price}</p>
                    <div className="card-actions">
                        <label
                            key={part._id}
                            for="purchasing-modal"
                            onClick={() => setProduct(part)}
                            className="btn btn-sm btn-secondary text-white">open modal
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;