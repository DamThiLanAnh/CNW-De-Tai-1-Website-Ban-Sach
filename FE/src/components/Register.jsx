const Register = () => {
    return (
        <div className='h-[calc(100vh-120px) flex justify-center items-center'>
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
                <h2 className='text-xl font-semibold mb-4 '>
                    Đăng ký
                </h2>
                <form action="">
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Your email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="name@gmail.com"
                        />
                    </div>
                    {/* Password */}
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
                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_confirm">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password_confirm"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>
                    {/* accept */}
                    <div className="flex items-center space-x-2 mb-4">
                        <input
                            className="text-sm text-gray-600"
                            id="remember_me"
                            type="checkbox"
                        />
                        <p className="block text-sm text-gray-700" htmlFor="remember_me">
                            I accept the <a href="/" className="text-blue-600">Terms and Conditions</a>
                        </p>
                    </div>
                    {/* Submit Button */}
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Register
                    </button>
                    {/* Already have an account? */}
                    <p className="mt-2 text-sm text-gray-600">
                        Already have an account? <a href="/login" className="text-blue-600 hover:text-blue-800">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register