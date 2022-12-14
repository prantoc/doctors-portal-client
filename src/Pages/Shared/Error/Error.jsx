import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Error = () => {
    const error = useRouteError()
    const { logoutUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogOut = () => {
        logoutUser()
            .then(() => { navigate('/login') })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <p className='text-danger fw-bold'>Something went wrong !</p>
            {error.statusText || error.message}
            <p>Please <Button onClick={handleLogOut}>Sign out</Button> and log back in</p>
        </div>
    );
};

export default Error;