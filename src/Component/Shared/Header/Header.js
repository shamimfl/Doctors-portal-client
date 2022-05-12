import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className='md:flex justify-between items-center font-semibold '>

            <div className='flex justify-between p-3'>
                <Link to={'/'} className='w-32'>Doctors Portal</Link>
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>

                    <div>
                        <div className='bg-black w-5 h-1'></div>
                        <div className='bg-black w-5 h-1 mt-1'></div>
                        <div className='bg-black w-5 h-1 mt-1'></div>
                    </div>
                </div>
            </div>
            <ul className={`lg:flex justify-end absolute lg:static sm:block lg:bg-white bg-primary w-full duration-500 ease-in ${open ? 'top-10' : 'top-[-320px]'}`}>
                <Link className='p-3 block' to='/'> Home</Link>
                <Link className='p-3 block' to='/about'> About</Link>
                <Link className='p-3 block' to='/appointment'> Appointment</Link>
                <Link className='p-3 block' to='/reviews'> Reviews</Link>
                <Link className='p-3 block' to='/contact'>Contact Us</Link>
                <Link className='p-3 block' to='/login'>Login</Link>
                
            </ul>
        </div>
    );
};

export default Header;