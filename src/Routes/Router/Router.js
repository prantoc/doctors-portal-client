import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Layout from "../../Layout/Layout";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Login from "../../Pages/Auth/Login/Login";
import SignUp from "../../Pages/Auth/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
]);