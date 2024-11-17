import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Navbar from "./component/Navbar.jsx";
import Login from "./pages/Login.jsx"

export let router = createBrowserRouter([


    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Home />
            </>
        )
    },
    {
        path: "/login",
        element: (
            <>
                <Navbar />
                <Login />
            </>
        )
    }
])