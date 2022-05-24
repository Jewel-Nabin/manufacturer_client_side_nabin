import React from 'react';
import myProfile from '../../assets/images/MyProfile.jpg';
import api from '../../assets/images/svg/api.svg';
import nodeJS from '../../assets/images/svg/nodeJS.svg';
import reactJS from '../../assets/images/svg/reactSVG.svg';
import js from '../../assets/images/svg/js.svg';
import express from '../../assets/images/svg/expressJS.svg';
import json from '../../assets/images/svg/json.svg';
import mongodb from '../../assets/images/svg/mongodb.svg';

const MyProfile = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='text-center'>
                        <img src={myProfile} className="max-w-sm rounded-lg shadow-2xl mx-auto" alt='' />
                        <h1 className='p-1'>Mohammed Jewel (Nabin)</h1>
                        <h2 className='p-1'>Email: jewelnabin@gmail.com</h2>
                        <p className='p-1'>My academic background is BBA (final year) at National University.</p>
                        <p className='p-1'>Chattogram, Bangladesh</p>
                    </div>
                    <div>
                        <div className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                            <div className="grid grid-flow-col gap-4">
                            </div>
                            <div>
                                <p className='text-2xl'>The following technologies's skill I have</p>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <img className='object-scale-down h-8 w-8' src={nodeJS} alt="" />
                                    <img className='object-scale-down h-8 w-8' src={api} alt="" />
                                    <img className='object-scale-down h-8 w-8' src={js} alt="" />
                                    <img className='object-scale-down h-8 w-8' src={reactJS} alt="" />
                                    <img className='object-scale-down h-16 w-16' src={express} alt="" />
                                    <img className='object-scale-down h-16 w-16' src={json} alt="" />
                                    <img className='object-scale-down h-16 w-16' src={mongodb} alt="" />
                                </div>
                            </div>
                            <div>
                                <p className='text-2xl'>Here of my three valued project</p>
                                <a href="https://balance-yoga-25ef2.web.app/"><strong>1. Balance Yoga:</strong></a>
                                <a href="https://jewels-sparkles.web.app/"><strong>2. Sparkle</strong></a>
                                <a href="https://cash-guru-nabin.netlify.app/"><strong>3. Cash Guru</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;