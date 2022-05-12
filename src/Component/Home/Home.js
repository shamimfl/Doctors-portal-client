import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contract from '../Contract/Contract';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Tritment from '../Tritment/Tritment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Tritment></Tritment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;