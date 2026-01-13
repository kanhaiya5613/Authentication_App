import React, { useState } from 'react'

function Register() {

    const [User, setuser] = useState({
        username: "",
        email: "",
        fullName: "",
        avatar: "",
        coverImage: "",
        password: ""

    });
    const handleInput = (e) => {
        let { name, value, files } = e.target;
        //console.log(e);
        name = e.target.name;
        value = e.target.value;

        setuser({
            ...User,
            [name]: files ? files[0] : value
        });
    };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!User.avatar) {
    alert("Avatar is required");
    return;
  }

  try {
    const formData = new FormData();

    formData.append("fullName", User.fullName);
    formData.append("email", User.email);
    formData.append("username", User.userName);
    formData.append("password", User.password);
    formData.append("avatar", User.avatar);

    if (User.coverImage) {
      formData.append("coverImage", User.coverImage);
    }

    const response = await fetch(
      "http://localhost:8000/api/v1/users/register",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend error:", errorText);
      return;
    }

    const data = await response.json();
    // console.log(data.username);
    // console.log(data.fullName);
    
    
    console.log("Success:", data);
    alert("Congratulations, User Registered Successfully")
    setuser({
        username: "",
        email: "",
        fullName: "",
        avatar: "",
        coverImage: "",
        password: ""
    })
  } catch (error) {
    console.log("Register error:", error);
  }
};


    return (
        <section>
            <main>
                <div className='section-registration'>
                    <div className='container grid grid-cols-2'>
                        <div className="registration-image">
                            <img
                                src='../public/register.png'
                                alt="Registration Image"
                                width="500"
                                height="500"

                            />

                        </div>
                        <div className="registration-form ">
                            <h1 className='main-heading mb-4 text-3xl font-bold mt-10 ml-10'>Registration Form</h1>
                            <br />
                            <form onSubmit={handleSubmit} className=''>
                                <div className="flex items-center gap-4 mb-4">

                                    <input className="border-2 p-2 flex-1"
                                        type='text'
                                        name="username"
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={User.userName}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="flex items-center gap-4 mb-4">

                                    <input className='border-2 p-2 flex-1 '
                                        type='email'
                                        name="email"
                                        placeholder="Enter Your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={User.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="flex items-center gap-4 mb-4">

                                    <input className='border-2 p-2 flex-1'
                                        type='text'
                                        name="fullName"
                                        placeholder="fullname"
                                        id="fullname"
                                        required
                                        autoComplete="off"
                                        value={User.fullName}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="flex items-center gap-4 mb-4">

                                    <input className='border-2 p-2 flex-1'
                                        type='password'
                                        name="password"
                                        placeholder="password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        //value={User.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <label
                                        htmlFor="avatar"
                                        className="cursor-pointer border-2 border-dashed border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
                                    >
                                        {User.avatar ? User.avatar.name : "Choose Profile Picture"}
                                    </label>

                                    <input
                                        type="file"
                                        id="avatar"
                                        name="avatar"
                                        className="hidden"
                                        onChange={handleInput}
                                        required
                                    />
                                </div>

                                <div className="flex items-center gap-4 mb-4">
                                    <label
                                        htmlFor="coverImage"
                                        className="cursor-pointer border-2 border-dashed border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
                                    >
                                        {User.coverImage ? User.coverImage.name : "Choose Cover Image"}
                                    </label>

                                    <input
                                        type="file"
                                        id="coverImage"
                                        name="coverImage"
                                        className="hidden"
                                        onChange={handleInput}
                                    />
                                </div>


                                <button type='submit' className='btn btn-submit text-xl mr-3 bg-blue-500 rounded-3xl p-2.5 text-white font-semibold active:scale-95' >Register Now</button>
                            </form>
                        </div>
                    </div>

                </div>
            </main>
        </section>
    )
}

export default Register