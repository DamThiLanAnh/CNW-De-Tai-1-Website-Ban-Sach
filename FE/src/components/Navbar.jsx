import { useSelector } from "react-redux";
import { Link } from "react-router"
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import avatar_user from "../assets/avatar.png"

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Order", href: "/order" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
]
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector((state) => state.cart.cartItems || [])
    console.log(cartItems)
    const currentUser = false
    return (
        <>
            <header className="max-w-screen-2xl mx-auto px-4 py-6">
                <nav className="flex justify-between items-center">

                    {/* left side */}
                    <div className="flex items-center md:gap-16 gap-4">
                        <Link to={'/'}>
                            <HiBars3CenterLeft className="size-6" />
                        </Link>

                        {/* search input */}
                        <div className="relative sm:w-72 w-40 space-x-2">
                            <CiSearch className="absolute inline-block left-3 inset-y-2" />
                            <input type="text" placeholder="Search here"
                                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md 
                            focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* right side */}
                    <div className="relative flex items-center md:space-x-3 space-x-2">
                        <div>
                            {
                                currentUser ? <>
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <img src={avatar_user} alt="avatar_user" className={
                                            `size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                                    </button>
                                    {/* Show dropdowns */}
                                    {
                                        isDropdownOpen &&
                                        <div className="absolute right-0 mt-2 w-48 bg-white
                                        shadow-lg rounded-md z-40">
                                            <ul className="py-2">
                                                {
                                                    navigation.map((item, index) => (
                                                        <li key={index} className="py-1"
                                                            onClick={() => { setIsDropdownOpen(false) } // dropdown
                                                            }>
                                                            <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    }
                                </> : <Link to='/login'>
                                    <HiOutlineUser className="size-6" />
                                </Link>
                            }
                        </div>
                        <button className="hidden sm:block">
                            <FaRegHeart className="size-6" />
                        </button>
                        <Link to={'/cart'} className="bg-primary p1 sm:px-6 px-2 flex items-center
                        rounded-sm">
                            <MdOutlineShoppingCart className="size-6" />
                            {
                                cartItems.length > 0 && <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
                            }
                        </Link >
                    </div>
                </nav >
            </header >
        </>
    )
}

export default Navbar