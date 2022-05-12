import React from 'react';
import './Contract.css'

const Contract = () => {
    return (
        <div className='contract-bg flex justify-center p-5'>
            <div className='text-center lg:w-2/5'>
                <h1 className='text-primary text-xl '>Contract</h1>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
                <input type="text" className='block w-full mt-5 p-2 rounded-md' placeholder='Enter Your Email' />
                <input type="text" className='block w-full mt-5 p-2 rounded-md' placeholder='Subject' />
                <textarea name="" id="" cols="30" rows="5" className='mt-5 w-full rounded-md p-5' placeholder='Your message'></textarea>
                <button class="btn border-0 uppercase font-bold text-white bg-gradient-to-r from-primary to-secondary mt-5">Submit</button>
            </div>
        </div>
    );
};

export default Contract;