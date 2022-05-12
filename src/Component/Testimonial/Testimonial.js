import React from 'react';
import quote from './quote.svg'
import people1 from './people1.png'
import people2 from './people2.png'
import people3 from './people3.png'

const Testimonial = () => {
    return (
        <div className='mt-10 p-10 font-semibold'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-primary text-xl'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <img className='h-16' src={quote} alt="" />
            </div>
            <section className='lg:grid grid-cols-3 gap-10 mt-10'>
            <div className='p-5 shadow-xl rounded-lg'>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <span className='flex items-center mt-3'>
                    <img className='w-16 border-2 border-primary rounded-full' src={people1} alt="" />
                    <span className='pl-3 '>
                    <h1 className='text-xl font-semibold'>Winson Herry</h1>
                    <p>California</p>
                    </span>
                </span>
            </div>
            <div className='p-5 shadow-xl rounded-lg'>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <span className='flex items-center mt-3'>
                    <img className='w-16 border-2 border-primary rounded-full' src={people2} alt="" />
                    <span className='pl-3'>
                    <h1 className='text-xl font-semibold'>Mandelina</h1>
                    <p>California</p>
                    </span>
                </span>
            </div>
            <div className='p-5 shadow-xl rounded-lg'>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <span className='flex items-center mt-3'>
                    <img className='w-16 border-2 border-primary rounded-full' src={people3} alt="" />
                   <span className='pl-3'>
                   <h1 className='text-xl font-semibold'>Yorida</h1>
                    <p>California</p>
                   </span>
                </span>
            </div>
            </section>
        </div>
    );
};

export default Testimonial;