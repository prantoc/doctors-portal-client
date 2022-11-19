import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../../Shared/Loading/Loading';

const ManagedDoctors = () => {
    const [swalProps, setSwalProps] = useState({});
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch(`http://localhost:5000/doctors`, {
            headers: {
                authoraization: `bearer ${localStorage.getItem('doctor-portal')}`
            }
        })
            .then(res => res.json())
    })

    //# Delete doctor function
    const MySwal = withReactContent(Swal)

    const handleDeleteDoctor = (id) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/doctor/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authoraization: `bearer ${localStorage.getItem('doctor-portal')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })

            }
        })

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <h3>All Doctors: {doctors.length}</h3>
            <div className='shadow-lg p-3 my-3 bg-body rounded'>
                <Table striped>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.length > 0 && doctors?.map((doc, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                    <Image roundedCircle style={{ height: '48px' }} src={doc.avatar} />
                                </td>
                                <td>{doc.name}</td>
                                <td>{doc.email}</td>
                                <td>{doc.speciality}</td>
                                <td><Button variant='danger' onClick={() => handleDeleteDoctor(doc._id)}>Delete</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ManagedDoctors;