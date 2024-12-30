import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home"
import App from "../App"
import Login from "../components/Login"
import Register from "../components/Register"
import CartPage from "../pages/books/CartPage"
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
                element: <CartPage />
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