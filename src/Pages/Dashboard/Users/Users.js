import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Loading from '../../Shared/Loading/Loading';

const Users = () => {
    const { isLoading, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`).then(res => res.json())
    })
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
                                <td><Button variant='primary'>Make Admin</Button></td>
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