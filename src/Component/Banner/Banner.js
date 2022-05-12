import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
            <div class="banner lg:flex justify-between pt-20 p-10">
                <img className='lg:hidden' src="https://i.ibb.co/zN2QHk2/chair.png" alt="" />
                <div className='lg:w-2/5 mt-5'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn border-0 text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
                <div className='lg:block hidden'>
                <img className=' ' src="https://i.ibb.co/zN2QHk2/chair.png" class="max-w-sm rounded-lg shadow-2xl" />
                </div>
            </div>
    );
};

export default Banner;