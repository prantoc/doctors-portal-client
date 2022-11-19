import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';

const ManagedDoctors = () => {
    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch(`http://localhost:5000/doctors`, {
            headers: {
                authoraization: `bearer ${localStorage.getItem('doctor-portal')}`
            }
        })
            .then(res => res.json())
    })

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
                                <td><Button variant='danger'>Delete</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ManagedDoctors;