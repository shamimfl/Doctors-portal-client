import React from 'react';
import clock from './icon/clock.svg'
import marker from './icon/marker.svg'
import phone from './icon/phone.svg'

const Info = () => {
    return (
        <div className='lg:grid grid-cols-3 gap-10 p-10'>
            <div className='mt-5 bg-gradient-to-r from-primary to-secondary p-2 rounded-md flex justify-center items-center font-semibold text-white'>
                <img src={clock} alt="" />
                <span className='pl-3'>
                    <h1 className='text-xl'>Opening Hours</h1>
                    <h1>Lorem Ipsum is simply dummy text of the pri</h1>
                </span>
            </div>
            <div className='mt-5 bg-accent p-2 rounded-md flex  text-white items-center font-semibold'>
                <img src={marker} alt="" />
                <span className='pl-3'>
                    <h1 className='text-xl'>Visit our location</h1>
                    <h1>Brooklyn, NY 10036, United States</h1>
                </span>
            </div>
            <div className='mt-5 bg-gradient-to-r from-primary to-secondary p-2 rounded-md flex items-center font-semibold text-white'>
                <img src={phone} alt="" />
                <span className='pl-3'>
                    <h1 className='text-xl'>Contact us now</h1>
                    <h1>+000 123 456789</h1>
                </span>
            </div>
        </div>
    );
};

export default Info;