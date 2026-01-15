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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login />}/>
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
