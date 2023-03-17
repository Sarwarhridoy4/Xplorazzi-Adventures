const { createBrowserRouter } = require("react-router-dom");
const { default: Error } = require("../components/Error/Error");
const { default: Main } = require("../components/layouts/Main/Main");
const { default: Home } = require("../components/pages/home/Home");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element : <Home/>
            }
        ]
        
    }
])