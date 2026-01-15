import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotFound from './Components/NotFound/NotFound.jsx'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Register from './Components/Register/Register.jsx'
import Layout from "./Layout.jsx"
import Login from "./Components/Login/Login.jsx"
import { AuthProvider } from "./Context/authContext.jsx"
import Home from './Components/Home/Home.jsx'
import { Services } from './Components/Services/Services.jsx'
import About from "./Components/About/About.jsx"
import Contact from './Components/Contact/Contact.jsx'
import Profile from './Components/Profile/Profile.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contacts' element={<Contact />}/>
      <Route path='/profile' element={<Profile />}/>
       {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
