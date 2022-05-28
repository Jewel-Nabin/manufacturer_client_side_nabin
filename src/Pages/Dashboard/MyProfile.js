import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log('data', data);
    }
    return (
        <div className='grid place-items-center'>
            <h1 className='text-2xl m-4'>My Profile</h1>
            <form className='w-80' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },

                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full mb-4">
                    <input
                        type="text"
                        placeholder="Education"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className='form-control w-full mb-4'>
                    <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mb-4">
                    <input
                        type="text"
                        placeholder="Location"
                        className="input input-bordered w-full"
                    />
                </div>
                
                <input className='btn btn-outline bg-neutral hover:bg-secondary text-white w-full' type="submit" value={"SIGNUP"} />
            </form>
        </div>
    );
};

export default MyProfile;