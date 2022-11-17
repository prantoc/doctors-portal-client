import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const DashboardSidebar = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px" }}>
                <ul className="nav  flex-column mb-auto">
                    <li className="nav-item">
                        <LinkContainer to="/dashboard">
                            <Nav.Link>My Appointments</Nav.Link>
                        </LinkContainer>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default DashboardSidebar;