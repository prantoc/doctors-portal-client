import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const DashboardSidebar = () => {
    return (
        <div>
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px" }}>
                <ul class="nav  flex-column mb-auto">
                    <li class="nav-item">
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default DashboardSidebar;