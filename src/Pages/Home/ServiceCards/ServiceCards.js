import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import fluoride from '../../../assets/imgs/images/fluoride.png'
import cavity from '../../../assets/imgs/images/cavity.png'
import whitening from '../../../assets/imgs/images/whitening.png'
const ServiceCards = () => {
    const cards = [
        {
            id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            img: cavity,
            name: 'Cavity Filling',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            img: whitening,
            name: 'Teeth Whitening',
            desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <>
            <Container className='my-5'>
                <div className="text-center mb-5">
                    <h4 className='primary-color'>OUR SERVICES</h4>
                    <h2>Services We Provide</h2>
                </div>
                <Row>
                    {
                        cards.map(data => <Col key={data.id} md={4} sm={12} className="mb-3">
                            <Card className='text-center shadow p-3 mb-5 bg-body rounded border-0 service-card'>
                                <Card.Body>
                                    <Row>
                                        <Col lg={12} md={12} sm={3} className="my-auto mb-3">
                                            <img src={data.img} alt="" className='img-fluid' />
                                        </Col>
                                        <Col lg={12} md={12} sm={9}>
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

export default ServiceCards;