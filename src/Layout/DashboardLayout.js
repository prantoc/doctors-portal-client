import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../Pages/Shared/DashboardSideBar/DashboardSidebar';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <DashboardSidebar></DashboardSidebar>
                    </Col>
                    <Col md={10} className="p-5" style={{ background: "#f1f5f9" }}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default DashboardLayout;