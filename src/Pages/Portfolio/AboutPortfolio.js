import React from 'react';
import myProfile from '../../assets/images/MyProfile.jpg';
import Hexagon from 'react-hexagon'


const AboutPortfolio = () => {
    return (
        <div className='mt-5' id='ap'>
            <h1 className='underline underline-offset-8 font-bold text-4xl text-center text-secondary'>About</h1>
            <div class="flex card lg:card-side bg-base-100 shadow-xl h-screen">
                <div className='flex-1 '>
                    <div>
                        <figure><Hexagon
                            className={'w-48'}
                            // style={}
                            backgroundImage={myProfile}
                        /></figure>
                    </div>
                    <div className='mt-3'>
                        <h1 className='text-center px-10 text-2xl'>Who's this guy?</h1>
                        <h1 className='text-center'>email: <small>jewelnabin@gmail.com</small></h1>
                        <h2 className='text-center px-10'>I'm a Front-End Developer in Chattogram, Bangladesh.
                            I have serious passion for UI,.
                            Let's make something special.</h2>
                        <h1 className='text-center'><strong>Academic Background</strong></h1>
                        <p className='text-center'>is BBA (final year) at National University.</p>
                    </div>
                </div>
                <div class="card-body flex-1">
                    <h2 className='text-3xl text-neutral'><strong>That technologies or skills I have.</strong></h2>
                    <h1 className='pt-3'><progress class="progress progress-accent w-72" value="60" max="100"></progress> Photoshop</h1>
                    <h1 className='pt-3'><progress class="progress progress-accent w-72" value="50" max="100"></progress> UI Design</h1>
                    <h1 className='pt-3'><progress class="progress progress-accent w-72" value="50" max="100"></progress> Node.js</h1>
                    <h1 className='pt-3'><progress class="progress progress-accent w-72" value="60" max="100"></progress> JavaScript</h1>
                    <h1 className='pt-3'><progress class="progress progress-accent w-72" value="70" max="100"></progress> Ract</h1>
                    <h1 className='pt-3'><progress class="progress progress-accent w-72" value="80" max="100"></progress> HTML</h1>
                    <h1 className='pt-3'><progress class="progress progress-accent w-72" value="90" max="100"></progress> CSS</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutPortfolio;