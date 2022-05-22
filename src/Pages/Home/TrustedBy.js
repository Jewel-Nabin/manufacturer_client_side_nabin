import React from 'react';
import favicon1 from '../../assets/images/favicon1.png';
import favicon2 from '../../assets/images/favicon2.png';
import favicon3 from '../../assets/images/favicon3.png';
import favicon4 from '../../assets/images/favicon4.png';

const TrustedBy = () => {
    return (
        <div className='my-20 mx-5'>
            <div className='text-center'>
                <h1 className='text-4xl'><span className='text-secondary'>Trusted</span> by who!</h1>
                <p className='text-2xl'>to understand and expectations of users</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className='card-body'>
                        <div className='flex justify-center items-center'>
                            <img className='pr-2' src={favicon1} alt="" />
                            <h1 className='text-3xl text-center font-bold text-primary'>320+</h1>
                        </div>
                        <h6 className='font-bold text-secondary'>Happy Clients</h6>
                        <p>At <b>part<span className='text-secondary'>Ex</span></b> , we're confident that you'll be able to find the right part or accessory for your car, truck or SUV. But if for some reason you aren't completely satisfied with your order, we accept returns within 90 days of purchase—and we'll give you your money back!</p>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className='card-body'>
                        <div className='flex justify-center items-center'>
                            <img className='pr-2' src={favicon4} alt="" />
                            <h1 className='text-3xl text-center font-bold text-primary'>320+</h1>
                        </div>
                        <h6 className='font-bold text-secondary'>Complete Projects</h6>
                        <p>Get back on the road faster with <b>part<span className='text-secondary'>Ex</span></b> . We deliver the parts you need, when you need them. Our three strategically-located auto parts warehouses are equipped with the latest technologies for efficient order processing and faster shipping. Customers within the continental U.S.</p>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className='card-body'>
                        <div className='flex justify-center items-center'>
                            <img className='pr-2' src={favicon2} alt="" />
                            <h1 className='text-3xl text-center font-bold text-primary'>320+</h1>
                        </div>
                        <h6 className="font-bold text-secondary">Feedbacks</h6>
                        <p>Take the guesswork out of shopping for auto parts with <b>part<span className='text-secondary'>Ex</span></b> . We make purchasing car parts online easier by providing accurate and detailed fitment information, which makes for a straightforward and hassle-free shopping experience. </p>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className='card-body'>
                        <div className='flex justify-center items-center'>
                            <img className='pr-2' src={favicon3} alt="" />
                            <h1 className='text-3xl text-center font-bold text-primary'>320+</h1>
                        </div>
                        <h6 className="font-bold text-secondary">Sales</h6>
                        <p>We have sold over 320 products through our courage and initiative which has helped us to export our products worldwide and we have already received a lot of good feedback.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;