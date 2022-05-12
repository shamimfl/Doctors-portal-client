import React from 'react';

const Footer = () => {
    return ( 
        <div className='font-semibold p-10'>
            <div className='grid lg:grid-cols-3 gap-5 cursor-pointer grid-cols-1'>
                <ul>
                    <li className='text-xl text-slate-500 mb-3'>SERVICES</li>
                    <li>Emergency Checkup</li>
                    <li>Monthly Checkup</li>
                    <li>Weekly Checkup</li>
                    <li>Deep Checkup</li>
                </ul>
                <ul>
                    <li className='text-xl text-slate-500 mb-3'>ORAL HEALTH</li>
                    <li>Fluoride Treatment</li>
                    <li>Cavity Filling</li>
                    <li>Teath Whitening</li>
                </ul>
                <ul>
                    <li className='text-xl text-slate-500 mb-3'>OUR ADDRESS</li>
                    <li>New York - 101010 Hudson</li>
                </ul>
            </div>
            <h1 className='text-center mt-10 text-slate-500'>Copyright 2022 All Rights Reserved MD: SHAMIM ISLAM</h1>
        </div>
    );
};

export default Footer;