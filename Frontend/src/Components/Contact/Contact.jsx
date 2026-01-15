import React from 'react'

function Contact() {
  return (
    <>
    <div className="flex items-center justify-center text-3xl font-bold text-white my-8">
        Contacts
      </div>

      
      <ul className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Phone:- 9905782367
        </li>
        <li className="text-lg cursor-pointer font-medium text-white hover:text-blue-600 transition">
          Email:- kk7077574@gmail.com
        </li>
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Github:- kanhaiya5613
        </li>
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Facebook:- Kanhaiya Kumar
        </li>
         <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          Instagram:- kanhaiya_kumar_99057
        </li>
        <li className="text-lg font-medium cursor-pointer text-white hover:text-blue-600 transition">
          LeetCode: Kanhaiya5613
        </li>
      </ul>
    </>
    
  )
}

export default Contact