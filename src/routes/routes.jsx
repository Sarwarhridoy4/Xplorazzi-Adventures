import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Error } = require("../components/Error/Error");
const { default: Main } = require("../components/layouts/Main/Main");
const { default: Home } = require("../components/pages/home/Home");
const { default: ComingSoon } = require("../components/pages/comingsoon/ComingSoon");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element : <Home/>
            },
            {
                path: '/login',
                element : <Login/>
            },
            {
                path: '/register',
                element : <Register/>
            },
            {
                path: '/coming-soon',
                element : <ComingSoon/>
            }
        ]
        
    }
])