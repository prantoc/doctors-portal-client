import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import ServiceCards from '../ServiceCards/ServiceCards';
const Home = () => {
    useTitle('Home')
    return (
        <>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceCards></ServiceCards>
            <DentalCare></DentalCare>
        </>
    );
};

export default Home;