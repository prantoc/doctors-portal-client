import React from 'react';
import { Table } from 'react-bootstrap';

const ManagedDoctors = () => {
    return (
        <>
            <h3>All Doctors</h3>
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
                        {/* {users.length > 0 && users?.map((user, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <Button variant='primary' onClick={() => handleMakeAdmin(user._id)}>Make Admin</Button>}</td>
                                <td><Button variant='danger'>Delete</Button></td>
                            </tr>
                        )} */}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ManagedDoctors;