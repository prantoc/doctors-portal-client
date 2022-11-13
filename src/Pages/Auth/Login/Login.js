import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../../assets/imgs/login/google.png'
import facebook from '../../../assets/imgs/login/facebook.png'
import github from '../../../assets/imgs/login/github.png'
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <Container>
            <Row className='my-5'>
                <Col md={4} sm={10} className='mx-auto border p-5 rounded text-secondary auth-card'>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h1 className='text-center pb-4'>Login</h1>
                        <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input {...register("email", { required: true, })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input {...register("password")} type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <button type="submit" className="btn btn-primary text-center col-12  rounded">
                            <div>
                                Login <FaArrowRight></FaArrowRight>
                            </div>
                        </button>
                    </form>
                    <div className="form-text text-center p-2 mt-3">Doesn't have an account? <Link to="/signup">Create new Acoount</Link></div>
                    <hr />
                    <div className='d-flex justify-content-center mt-3'>
                        <img className='m-4' role="button" src={google} alt='Logo' width={30} />
                        <img className='m-4' role="button" src={github} alt='Logo' width={30} />
                        <img className='m-4' role="button" src={facebook} alt='Logo' width={30} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;