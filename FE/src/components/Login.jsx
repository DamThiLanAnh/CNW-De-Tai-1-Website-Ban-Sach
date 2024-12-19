import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='h-[calc(100vh-120px) flex justify-center items-center'>
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
                <h2 className='text-xl font-semibold mb-4 '>
                    Đăng nhập
                </h2>
                <form action="">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <div className="flex flex-wrap space-y-2.5 items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                    <p>
                        Have not account? Please <a href='/register' className="text-blue-500">Register</a>
                    </p>
                    <button className="w-full mt-4 flex items-center justify-center bg-gray-900 text-white border hover:bg-blue-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        <FaGoogle className="mr-2" />
                        <span>Sign in with Google</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login