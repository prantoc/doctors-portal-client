import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import google from '../../../assets/imgs/login/google.png'
import facebook from '../../../assets/imgs/login/facebook.png'
import github from '../../../assets/imgs/login/github.png'
// import { errorToast, successToast } from '../../../toast/Toaster';
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
// import useTitle from '../../../hooks/useTitle';
const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <Container>
            <Row className='my-5'>
                <Col md={4} sm={10} className='mx-auto border p-5 rounded text-secondary auth-card'>
                    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                        <h1 className='text-center pb-2'>SignUp</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                            <input {...register("Name")} placeholder="Your full name" className="form-control" id="exampleInputName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" {...register("Email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder='Enter your email ' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" {...register("Password")} className="form-control" id="exampleInputPassword1" required placeholder='Enter your password' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input type="password" {...register("ConfirmPassword")} className="form-control" id="exampleInputPassword2" required placeholder='Enter your confir passowrd' />
                        </div>
                        <button type="submit" className="btn btn-primary text-center col-12  rounded">
                            SignUp <FaArrowRight></FaArrowRight>
                        </button>
                    </form>
                    <p>{data}</p>

                    <div className="form-text text-center p-2 mt-3">Have an account? <Link to="/login">Login</Link></div>
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

export default SignUp;