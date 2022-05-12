import Reac from 'react';
import chair from './chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div>
            <div class="lg:flex justify-between lg:flex-row-reverse mt-10 p-10">
                <img src={chair} class="lg:w-2/4 " alt=''/>
                <div className='w-full'>
                    <DayPicker 
                    mode='single'
                     selected={date}
                     onSelect={setDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;