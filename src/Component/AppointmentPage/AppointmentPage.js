import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailabeAppoinment from './AvailableAppoinment/AvailabeAppoinment';

const AppointmentPage = () => {
    const [date, setDate] =useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailabeAppoinment date={date}></AvailabeAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentPage;