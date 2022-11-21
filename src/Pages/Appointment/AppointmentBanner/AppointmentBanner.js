import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../assets/imgs/images/chair.png'
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <>
            <Container className='py-5 home-top-banner'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <DayPicker mode="single"
                            selected={selectedDate}
                            onSelect={(selectedDate) => {
                                if (selectedDate) {
                                    setSelectedDate(selectedDate)
                                }
                            }}
                        />
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