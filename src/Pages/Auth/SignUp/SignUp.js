import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../../assets/imgs/login/google.png'
import facebook from '../../../assets/imgs/login/facebook.png'
import github from '../../../assets/imgs/login/github.png'
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import { errorToast, successToast } from '../../../toast/Toaster';
const SignUp = () => {
    const { signInWithEmailPass, loading, setLoading, updateUserData } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleSignUp = data => {
        setLoading(true)
        const { name, email, password } = data
        signInWithEmailPass(email, password)
            .then(() => {
                updateUserData(name)
                    .then(() => {
                        successToast('successfully created an account')
                        setLoading(false)
                        navigate('/')
                    }).catch((error) => {
                        errorToast(error)
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                errorToast(errorMessage)
                setLoading(false)
            });
    }
    return (
        <Container>
            <Row className='my-5'>
                <Col md={4} sm={10} className='mx-auto border p-5 rounded text-secondary auth-card'>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <h1 className='text-center pb-2'>SignUp</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                            <input {...register("name", { required: "Name is required" })} placeholder="Your full name" className="form-control" id="exampleInputName" aria-invalid={errors.name ? "true" : "false"} />
                            {errors.name && <p className='text-danger fw-bold my-1' role="alert">{errors.name?.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" {...register("email", {
                                required: { value: true, message: "Email Address is required" },
                                // pattern: {
                                //     value: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/,
                                //     message: "I think I said _valid_, didn't I?"
                                // }
                            })} aria-invalid={errors.email ? "true" : "false"} className="form-control" id="exampleInputEmail1" placeholder='Enter your email ' />
                            {errors.email && <p className='text-danger fw-bold my-1' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" {...register("password", {
                                required: "Password Address is required",
                                minLength: { value: 6, message: 'Password must be 6 characters!' }
                            })} aria-invalid={errors.password ? "true" : "false"} className="form-control" id="exampleInputPassword1" placeholder='Enter your password' />
                            {errors.password && <p className='text-danger fw-bold my-1' role="alert">{errors.password?.message}</p>}
                        </div>
                        {/* <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input type="password" {...register("confirmPassword", {
                                required: "Password Address is required",
                                minLength: { value: 6, message: "Confirm password doesn't match with password !" }
                            })} aria-invalid={errors.confirmPassword ? "true" : "false"} className="form-control" id="exampleInputPassword2" placeholder='Enter your confirm passowrd' />
                            {errors.confirmPassword && <p className='text-danger fw-bold my-1' role="alert">{errors.confirmPassword?.message}</p>}
                        </div> */}
                        <button type="submit" className="btn btn-primary text-center col-12  rounded">

                            {loading
                                ?
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                <>SignUp <FaArrowRight></FaArrowRight></>}
                        </button>
                    </form>


                    <div className="form-text text-center p-2 mt-3">Have an account? <Link to="/login">Login</Link></div>
                    <hr />
                    <div className='d-flex justify-content-center'>
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