import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { successToast } from '../../../toast/Toaster';
import Loading from '../../Shared/Loading/Loading';

const Users = () => {
    const { isLoading, data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`).then(res => res.json())
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    successToast('Role set successfully as an admin')
                    refetch()
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <h3>All Users</h3>
            <div className='shadow-lg p-3 my-3 bg-body rounded'>
                <Table striped>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <Button variant='primary' onClick={() => handleMakeAdmin(user._id)}>Make Admin</Button>}</td>
                                <td><Button variant='danger'>Delete</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Users;