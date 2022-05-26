import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const PurchasingModal = ({ product, setProduct }) => {
    const { _id, name, minQuantity, avQuantity, price, img, description } = product;
    const [user, loading, error] = useAuthState(auth);

    const handleBuy = event => {
        event.preventDefault();
        console.log(name);
        setProduct(null);

        const purchasing = {
            productId: _id,
            product: name,
            buyerName: user.displayName,
            buyer: user.email,
            phone: event.target.phone.value,
            location: event.target.address.value
        }

        fetch('https://peaceful-dawn-98509.herokuapp.com/purchasing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchasing)
        })

            .then(res => res.json())
            .then(data => {
                toast.success(`Your purchase has been confirmed`);
                setProduct(null);
            })
    }



    return (
        <div>
            <input type="checkbox" id="purchasing-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchasing-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Parts Name: {name}</h3>
                    <div className='flex'>
                        <div className='product-info flex-1'>
                            <img className='w-32 mx-auto' src={img} alt="" />
                            <h4 className='pt-2'>Order Quantity: {minQuantity}</h4>
                            <h4 className='pt-2'>Price: ${price}</h4>
                        </div>
                        <div className='customer-info flex-1'>
                            <form onSubmit={handleBuy} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                                <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                <input type="submit" value={"Order Confirm"}
                                className="btn btn-secondary w-full m-2" />
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PurchasingModal;