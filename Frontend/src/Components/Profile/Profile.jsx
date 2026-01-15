import React ,{useState} from 'react'
import {useAuth} from "../../Context/authContext.jsx";
import { Link } from 'react-router-dom';
function Profile() {
    const {User,logout} = useAuth()
    console.log(User)
  return (
    <section className="min-h-screen bg-gray-700 text-gray-100">
  <main className="max-w-4xl mx-auto py-12">

    <div className="text-4xl font-bold text-center mb-10 text-gray-100">
      Welcome Back,
      <p className="mt-4 text-blue-300">
        {User?.data.User.fullName || "User"}
      </p>
    </div>

    <div className="flex flex-col items-center justify-center gap-8 ">

      <img
        className="border-4 border-gray-500 rounded-full h-80 w-80 object-cover shadow-lg"
        src={User?.data.User.avatar.url || "/avatar.jpg"}
        alt="Profile pic"
      />

      <button onClick={logout} className="text-red-300 text-2xl font-semibold hover:text-red-400 transition active:scale-95">
        <Link to="/logout">Logout</Link>
      </button>

    </div>

  </main>
</section>

  )
}

export default Profile