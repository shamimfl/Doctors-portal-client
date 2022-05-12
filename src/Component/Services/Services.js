import React from 'react';
import fluoride from './img/fluoride.png'
import cavity from './img/cavity.png'
import whitening from './img/whitening.png'

const Services = () => {
    return (
        <div className='mt-10 p-10'>
            <div>
                <h1 className='font-semibold text-center text-primary uppercase'>Our Service </h1>
                <h1 className='font-semibold text-center text-xl uppercase'>Services We Provide</h1>
            </div>
            <div className='mt-5'>
                <div className='lg:grid grid-cols-3  gap-10 font-semibold'>
                    <div className='shadow-md  text-center p-2 rounded-md'>
                        <div className='flex justify-center p-3'><img src={fluoride} alt="" /></div>
                        <span>
                            <h1 className='text-xl'>Fluoride Treatment</h1>
                            <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                        </span>
                    </div>
                    <div className='shadow-md text-center p-2 rounded-md'>
                        <div className='flex justify-center p-3'><img src={cavity} alt="" /></div>
                        <span>
                            <h1 className='text-xl'>Cavity Filling</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, incidunt.</p>
                        </span>
                    </div>
                    <div className='shadow-md text-center p-2 rounded-md'>
                       <div className='flex justify-center p-3'> <img src={whitening} alt="" /></div>
                        <span>
                            <h1 className='text-xl'>Teeth Whitening</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet vero itaque dolor hic iusto.</p>
                        </span>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Services;