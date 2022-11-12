import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import clock from '../../../assets/imgs/icons/clock.svg'
import location from '../../../assets/imgs/icons/marker.svg'
import phone from '../../../assets/imgs/icons/phone.svg'
const Infocards = () => {
    const cards = [
        {
            id: 1,
            img: clock,
            name: 'Opening Hours',
            desc: 'Lorem Ipsum is simply dummy text of the pri',
            class: 'clock-card',
        },
        {
            id: 2,
            img: location,
            name: 'Visit our location',
            desc: 'Brooklyn, NY 10036, United States',
            class: 'location-card',
        },
        {
            id: 3,
            img: phone,
            name: 'Opening Hours',
            desc: '+000 123 456789',
            class: 'clock-card',
        },
    ]
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    {
                        cards.map(data => <Col key={data.id} md={4} sm={12} className="mb-3">
                            <Card className={data.class}>
                                <Card.Body>
                                    <Row>
                                        <Col lg={3} md={12} sm={3} className="my-auto mb-3">
                                            <img src={data.img} alt="" className='img-fluid' />
                                        </Col>
                                        <Col lg={9} md={12} sm={9}>
                                            <Card.Subtitle className="mb-3">{data.name}</Card.Subtitle>
                                            <Card.Text>
                                                {data.desc}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Infocards;