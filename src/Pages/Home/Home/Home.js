import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../assets/imgs/images/chair.png'
const Home = () => {
    return (
        <>
            <Container className='pt-5 home-top-banner'>
                <Row >
                    <Col lg={6} md={6} sm={12} className='my-auto'>
                        <h1 className='text-dark lh-base'>Your New Smile Starts<br /> Here</h1>
                        <p className='text-dark p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className='btn btn-danger'> Get Started</button>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <img className='img-fluid' src={bannerImg} alt="" />
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Home;