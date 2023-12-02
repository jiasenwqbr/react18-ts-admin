// import Home from "../views/Home"
// import About from "../views/About"


import React, { lazy } from "react"
import {Navigate} from "react-router-dom"
const Home = lazy(()=> import("../views/Home"))
const About = lazy(()=> import("../views/About"))
const User = lazy(()=> import("../views/User"))
const routes = [
    {
        path:'/',
        element:<Navigate to="/home" />
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element: <React.Suspense fallback={<div>Loading...</div>}>
            <About/>
        </React.Suspense>
    
    },
    {
        path:'/user',
        element: <React.Suspense fallback={<div>Loading...</div>}>
        <User/>
    </React.Suspense>
    }
]

export default routes;