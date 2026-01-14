import React from "react";
import {Link, NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <header className="bg-black text-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-3x1 font-bold bg-orange-500  p-2 rounded-3xl">Kanhaiya</Link>
                <div className="flex flex-wrap">
                    <ul to="#" className=" flex gap-6 items-center">
                        <li> <Link to="#" className="hover:text-gray-300 cursor-pointer">Home</Link></li>
                        <li> <Link to="/About" className="hover:text-gray-300 cursor-pointer">About</Link></li>
                        <li> <Link to="Contact" className="hover:text-gray-300 cursor-pointer">Contact</Link></li>
                        <li> <Link to="/Services" className="hover:text-gray-300 cursor-pointer">Services</Link></li>
                        <li> <Link to="/Login" className="hover:text-gray-300 cursor-pointer">Login</Link></li>
                        <li> <Link to="/Register" className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 cursor-pointer">
                            SignUp
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header