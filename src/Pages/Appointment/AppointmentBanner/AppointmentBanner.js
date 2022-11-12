import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../assets/imgs/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <>
            <Container className='py-5 home-top-banner'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <DayPicker mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You have selected date: <span className='primary-color fw-bold' >{format(selectedDate, 'PP')}</span></p>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <img className='img-fluid' src={bannerImg} alt="" />
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default AppointmentBanner;