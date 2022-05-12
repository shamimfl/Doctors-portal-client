import React from 'react';
import tritment from './treatment.png'

const Tritment = () => {
    return (
        <div>
            <div class="hero min-h-screen p-5">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={tritment} class="lg:h-80 lg:w-2/5   rounded-lg shadow-2xl" />
                    <div className='lg:w-2/4'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn border-0 text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tritment;