import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import treatment from '../../../assets/imgs/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const DentalCare = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col md={5} sm={12} className=" text-lg-end text-center">
                    <img src={treatment} alt="" className='img-fluid h-75 rounded' />
                </Col>
                <Col md={7} sm={12} className='my-lg-auto my-0 text-start px-5'>
                    <h1>Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className='col-md-10'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </Col>

            </Row>
        </Container>
    );
};

export default DentalCare;