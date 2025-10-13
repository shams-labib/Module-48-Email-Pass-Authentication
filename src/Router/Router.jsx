import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Root from "./Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Login/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<Root></Root>,
        children: [
            {
                path:'/',
                index: true,
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>
            }, 
            {
                path: '/Login',
                Component:Login
            }
        ]
    }
])