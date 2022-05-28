import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('parts', () => fetch('https://peaceful-dawn-98509.herokuapp.com/part').then(res => res.json()));

    const imageStorageKey = '3d34cfb188a1d218e454ec8c13461b93';

    const onSubmit = async data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imgbb', result);
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        minQuantity: data.minQuantity,
                        avQuantity: data.avQuantity,
                        price: data.price,
                        description: data.description,
                        img: img
                    }
                    // send to your database 
                    fetch('https://peaceful-dawn-98509.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-md"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-md"
                        {...register("avQuantity", {
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Minimum Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Minimum Quantity"
                        className="input input-bordered w-full max-w-md"
                        {...register("minQuantity", {
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-md"
                        {...register("price", {
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-md mb-3"
                        {...register("description", {
                        })}
                    />
                </div>

                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-md"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full btn-secondary mt-10 max-w-md text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;