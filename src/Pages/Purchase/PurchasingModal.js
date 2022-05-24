import React from 'react';

const PurchasingModal = ({ product, setProduct }) => {
    const { _id, name, minQuantity, avQuantity, price, img, description } = product;

    const handleBuy = event => {
        event.preventDefault();
        // setProduct(null);

    }

    return (
        <div>
            <input type="checkbox" id="purchasing-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="purchasing-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Parts Name: {name}</h3>
                    <form onSubmit={handleBuy} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value={"Submit"} className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchasingModal;