import React from "react";
import {data, Link, NavLink} from 'react-router-dom'
import { useState ,useEffect,useRef} from "react";
import {useAuth} from "../../Context/authContext.jsx";
const Header = () => {
    const {isLoggedIn,User,logout} = useAuth();
    //console.log(User.data.User.avatar.url)
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

// this is for when we click anywhere then icon list removed
 useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

    return (
        <header className="bg-black text-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-3x1 font-bold bg-orange-500  p-2 rounded-3xl">Kanhaiya</Link>
                <div className="flex flex-wrap">
                    <ul  className=" flex gap-6 items-center">
                        <li> <Link to="/home" className="hover:text-gray-300 cursor-pointer">Home</Link></li>
                        <li> <Link to="/about" className="hover:text-gray-300 cursor-pointer">About</Link></li>
                        <li> <Link to="contacts" className="hover:text-gray-300 cursor-pointer">Contact</Link></li>
                        <li> <Link to="/services" className="hover:text-gray-300 cursor-pointer">Services</Link></li>
                        {isLoggedIn?(
                            <li className="relative"  ref={dropdownRef}>
                                <button onClick={()=> setOpen(!open)}>
                                    <img
                                    src={User.data.User.avatar.url || "/avatar.jpg"}
                                    alt="profile"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                    />
                                </button>
                                {open && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                                        <p className="px-4 py-2 font-semibold border-b">
                                            {User.data.User.fullName || "User"}
                                            
                                        </p>
                                        
                                        <Link
                                        to="/profile"
                                        onClick={()=>setOpen(false)}
                                        className="block px-4 py-2 hover:bg-gray-100">
                                            Profile
                                        </Link>
                                        <button 
                                        
                                        onClick={()=>{logout();
                                            setOpen(false)
                                        } }
                                        className = "w-full text-left px-4 py-4 text-red-600 hover:bg-gray-100 active:scale-95">
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </li>
                        ):(
                            <>
                            <li> <Link to="/Login" className="hover:text-gray-300 cursor-pointer">Login</Link></li>
                        <li> <Link to="/Register" className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 cursor-pointer">
                            SignUp
                            </Link>
                        </li>
                            </>
                        )}
                        
                    </ul>
                </div>
            </nav>
        </header>
    )
   

}

export default Header