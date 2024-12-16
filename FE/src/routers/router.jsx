import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home"
import App from "../App"
import Login from "../components/Login"
import Register from "../components/Register"
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: '/',
                element: <Home />,
            },

            {
                path: '/order',
                element: <div>Orders</div>
            },

            {
                path: '/about',
                element: <div>About</div>
            },

            {
                path: '/cart',
                element: <div>Cart</div>
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
]);

export default router;