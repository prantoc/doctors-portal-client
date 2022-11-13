import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Login from "../../Pages/Auth/Login/Login";
import SignUp from "../../Pages/Auth/SignUp/SignUp";
import Home from "../../Pages/Home/Home/Home";

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
]);