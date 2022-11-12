import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Login from "../../Pages/Auth/Login/Login";
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
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
]);