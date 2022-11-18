import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { loading, setLoading, } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: specialities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: () => fetch(`http://localhost:5000/appointmentSpeciality`).then(res => res.json())

    })

    const handleAddDoctor = data => {
        const { name, email, speciality, img } = data
    }


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <h3>Add a Doctor</h3>
            <div className='shadow-lg p-3 my-3 bg-body rounded col-6'>
                <form className='my-4' onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="mb-4">
                        <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                        <input {...register("name", {
                            required: { value: true, message: "Name Address is required" },
                        })} type="text" className="form-control" id="exampleInputName" aria-invalid={errors.name ? "true" : "false"} />
                        {errors.name && <p className='text-danger fw-bold my-1' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input {...register("email", {
                            required: { value: true, message: "Email Address is required" },
                        })} type="email" className="form-control" id="exampleInputEmail1" aria-invalid={errors.email ? "true" : "false"} />
                        {errors.email && <p className='text-danger fw-bold my-1' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">Speciality</label>
                        <select {...register("speciality", {
                            required: { value: true, message: "Speciality is required" },
                        })} className="form-select" aria-label="Default select example" aria-invalid={errors.speciality ? "true" : "false"}>
                            {specialities && specialities.map(speciality => <option key={speciality._id} value={speciality.name}>{speciality.name}</option>)}
                        </select>
                        {errors.speciality && <p className='text-danger fw-bold my-1' role="alert">{errors.speciality?.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputImg" className="form-label">Profile Photo</label>
                        <input {...register("img", {
                            required: { value: true, message: "Profile Photo is required" },
                        })} type="file" className="form-control" id="exampleInputImg" aria-invalid={errors.img ? "true" : "false"} />
                        {errors.img && <p className='text-danger fw-bold my-1' role="alert">{errors.img?.message}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary text-center col-12  rounded">
                        <div>
                            {loading
                                ?
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                <>Add a Doctor <FaArrowRight></FaArrowRight></>}
                        </div>
                    </button>
                </form>
            </div >
        </>
    );
};

export default AddDoctor;