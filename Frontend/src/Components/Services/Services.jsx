import React from "react";

export const Services = () => {
  return (
    <>

      <div className="flex items-center justify-center text-3xl font-bold text-white my-8">
        Services
      </div>

      
      <ul className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Rock Paper Scissor Game
        </li>
        <li className="text-lg cursor-pointer font-medium text-white hover:text-blue-600 transition">
          Register
        </li>
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Login
        </li>
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Logout
        </li>
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Profile
        </li>
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Contacts
        </li>
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          About
        </li>
      </ul>
    </>
  );
};
