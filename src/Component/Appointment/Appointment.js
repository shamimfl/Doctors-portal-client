import React from 'react';
import './Appointment.css'
import doctor from './doctor.png'

const Appointment = () => {
    return (
        <div className='Appointment md:flex justify-between items-center lg:mt-5 mt-28 lg:p-0 p-5'>
            <div>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='text-white'>
                <h1 className='text-primary'>Appointment</h1>
                <h1 className='text-3xl'>Make an appointment Today</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum unde, aliquid commodi voluptas ratione illum inventore rerum consectetur ab itaque, tenetur fuga nostrum sunt, doloremque vitae eos distinctio! Reprehenderit sed sequi totam quasi modi mollitia nam praesentium libero dignissimos ipsam.</p>
                <button class="btn border-0 text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
            </div>
        </div>
    );
};

export default Appointment;