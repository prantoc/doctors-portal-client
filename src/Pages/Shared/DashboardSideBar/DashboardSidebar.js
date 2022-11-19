import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useAdmin } from '../../../hooks/useAdmin';

const DashboardSidebar = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "280px" }}>
                <div className="navbar-nav  flex-column mb-auto">
                    <LinkContainer to="/dashboard">
                        <Nav.Link>My Appointments</Nav.Link>
                    </LinkContainer>

                    {isAdmin && <LinkContainer to="/dashboard/users">
                        <Nav.Link>Users</Nav.Link>
                    </LinkContainer>}
                    {isAdmin && <LinkContainer to="/dashboard/add-doctor">
                        <Nav.Link>Add Doctor</Nav.Link>
                    </LinkContainer>}
                    {isAdmin && <LinkContainer to="/dashboard/managed-doctors">
                        <Nav.Link>All Doctors</Nav.Link>
                    </LinkContainer>}

                </div>
            </div>

        </div>
    );
};

export default DashboardSidebar;