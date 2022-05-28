import React from 'react';
import bg from '../../assets/images/bg.png';
import { AiOutlineArrowDown } from "react-icons/ai";


const MyPortfolio = () => {
    
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className='flex justify-center items-center h-screen'>
            <div>
                <h1 className='text-white text-4xl text-center'>Hello, I'm <span className='text-secondary'>Jewel Nabin</span></h1>
                <h1 className='text-white text-4xl text-center'>I'm a front-end web developer.</h1>
                <button href="ap" class="btn hover:btn-secondary w-50 btn-md text-white ml-40 mt-2">View my work  <AiOutlineArrowDown/> </button>
            </div>
        </div>
    );
};

export default MyPortfolio;