import React from 'react';
import auth from '../../firebase.init';
import MyProfile from './MyProfile';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";



const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    if (user) {
        console.log(user);
    }

    const onSubmit = data => {
        console.log(data);
    }


    return (
        <div className='flex min-h-screen justify-center items-center w-full'>
            {/* <MyProfile /> */}
            <div className="card min-h-screen bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-2xl text-center font-bold'>Log in to part<span className='text-secondary text-3xl font-bold'>Ex</span></h1>
                    <p className='text-center'>Welcome back! Login with your data that you entered during registration</p>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline bg-neutral hover:bg-secondary text-white">Login with Google
                    </button>
                    <button className="btn btn-outline bg-neutral hover:bg-secondary text-white">Login with Github</button>
                    <div className="divider">OR</div>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                class="input input-bordered w-full"
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

                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                class="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },

                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='btn btn-outline bg-neutral hover:bg-secondary text-white w-full' type="submit" value={"LOGIN"} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;