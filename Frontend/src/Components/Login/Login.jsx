import React from 'react'
import { useState } from 'react';
import Header from '../Header/Header.jsx';
import {useAuth} from "../../Context/authContext.jsx";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    // const [isLoggedIn, setLoggedIn] = useState(false);
    const {login} = useAuth();
    const navigate = useNavigate()
    const [User, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handleInput = (e) => {
        let { name, value } = e.target;
        // const password = target.password
        // const username = target.username
        // const email = target.email

        setUser(User => ({
            ...User,
            [name]: value
        })
        )
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(User)
        try {
            const formData = new FormData();
            formData.append("username", User.username)
            formData.append("email", User.email)
            formData.append("password", User.password)

            const response = await fetch(
                "http://localhost:8000/api/v1/users/login",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();
            console.log("Success:", data);
            alert("Congratulations, User Logged In Successfully")
            login(data.accessToken, data);
            navigate("/");
        } catch (e) {
            console.log("Error", e)
        }
    }



    return (
        <>
            <section>
                <main>
                    <div className="Login-Page">
                        <div className='container grid grid-cols-2'>
                            <div className='Login Image'>
                                <
                                    img src='../public/login.png'
                                    alt="Login Image"
                                    height="500"
                                    width="500"
                                />
                            </div>
                            <div className='Login Saction '>
                                <h1 className='main-heading mb-4 text-3xl font-bold mt-10 ml-10'>Login</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                     <div className="flex items-center gap-4 mb-4">
                                    <input className="border-2 p-2 flex-1"
                                        type="text"
                                        name='username'
                                        placeholder='Username'
                                        id="username"
                                        required
                                        autoComplete='off'
                                        onChange={handleInput}
                                    />
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                    <input className="border-2 p-2 flex-1"
                                        type="email"
                                        name="email"
                                        placeholder='email'
                                        id="email"
                                        
                                        autoComplete='off'
                                        onChange={handleInput}
                                    />
                                    </div>
                                    <div className="flex items-center gap-4 mb-4">
                                    <input className="border-2 p-2 flex-1"
                                        type="password"
                                        name="password"
                                        placeholder='password'
                                        id='password'
                                        required
                                        autoComplete='off'
                                        onChange={handleInput}
                                    />
                                    </div>
                                    <br />
                                    <button type='submit' className='btn btn-submit text-xl  mr-3 bg-blue-500 rounded-3xl p-2.5 text-white font-semibold active:scale-95'>Submit Now</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
export default Login;