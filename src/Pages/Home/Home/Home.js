import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Container className='pt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <h1 className='text-secondary lh-base'>Your New Smile Starts<br /> Here</h1>
                        <p className='text-secondary p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className='btn btn-danger'> Get Started</button>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        {/* <img className='img-fluid' src={sliderGif} alt="" /> */}
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Home;