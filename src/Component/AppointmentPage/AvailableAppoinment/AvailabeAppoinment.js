import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailabeAppoinment = ({ date }) => {
    const [service, setservice] = useState([])
    const [appoinment, setAppoinment] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setservice(data))
    }, [])

    const handleAppoinment = e => {
        setAppoinment(e)
    }
    return (
        <div className='p-10'>
            <h1 className='text-xl text-center mt-5 mb-5 text-secondary'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='lg:grid grid-cols-3 gap-10'>
                {
                    service.map(service =>
                        <div className='w-full text-center shadow-lg rounded-2xl p-5'>
                            <h1 className='text-xl font-semibold text-secondary'>{service.name}</h1>
                            {service.slots.length == 0 ? <h1 className='text-red-500 mt-3 mb-3 font-semibold'>Try Another Date</h1> :
                                <h2 className='mt-3 mb-3 font-semibold'>{service.slots[0]}</h2>
                            }
                            <h4 className='mt-3 mb-3 font-semibold'>Avail-Able Space {service.slots.length}</h4>

                            {
                                service.slots.length == 0 ?
                                    <button className='btn btn-secondary btn-disabled text-white'>Book appoinment</button> :
                                    <label onClick={() => handleAppoinment(service)} for="from" class="btn modal-button btn-secondary text-white">Book appoinment</label>
                            }
                        </div>)
                }
            </div>
            <input type="checkbox" id="from" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="from" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='text-center'>
                        <h1 className='text-xl font-semibold'>{appoinment?.name}</h1>
                        <input type="text" value={format(date, 'PP')} readOnly className='input-disabled  w-full p-3 mt-5 rounded-lg font-bold' />
                        <select className='select  w-full mt-5 bg-slate-100' id="">
                            {
                                appoinment?.slots?.map(data => <option className='w-full p-3 rounded-lg'>{data}</option>)
                            }
                        </select>
                        <input type="text" value={appoinment?.slots?.[0]} readOnly className='input-disabled w-full p-3 mt-5 rounded-lg font-bold' />
                        <input type="text" placeholder='Full Name' className='w-full p-3 mt-5 border-2 rounded-lg font-bold' />
                        <input type="text" placeholder='Phone Number' className='w-full p-3 mt-5 border-2 rounded-lg font-bold' />
                        <input type="text" placeholder='Email' className='w-full p-3 mt-5 border-2 rounded-lg font-bold' />
                        <input type="submit" value='SUBMIT' className='px-3 py-2 mt-5 btn-accent w-full rounded-md font-bold' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AvailabeAppoinment;