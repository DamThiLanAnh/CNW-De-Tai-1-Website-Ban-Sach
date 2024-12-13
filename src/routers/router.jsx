import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import App from "../App";
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
        ]
    },

    {
        path: '/login',
        element: <div>Login</div>
    },
]);

export default router;