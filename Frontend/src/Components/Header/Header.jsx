import React from "react";

const Header = () => {
    return (
        <header className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-x1 font-bold">Logo</div>
                <div className="flex flex-wrap">
                    <ul className=" flex gap-6 items-center">
                        <li className="hover:text-gray-300 cursor-pointer">Home</li>
                        <li className="hover:text-gray-300 cursor-pointer">About</li>
                        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                        <li className="hover:text-gray-300 cursor-pointer">Services</li>
                        <li className="hover:text-gray-300 cursor-pointer">Login</li>
                        <li className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 cursor-pointer">
                            SignUp
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header