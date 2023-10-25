import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import MyCart from './pages/MyCart'
import Login from './pages/Login'
import AddProduct from './pages/AddProduct'
import Root from './pages/Root'
import AuthProvider from './AuthProvider/AuthProvider'
import Register from './pages/Register'
import Privateroute from './Privateroute/Privateroute';
import BrandPages from './pages/BrandPages';
import ShowProduct from './pages/ShowProduct';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/mycart',
        element:<Privateroute><MyCart></MyCart></Privateroute>,
        
      },
      {
        path:'/addproduct',
        element:<Privateroute><AddProduct></AddProduct></Privateroute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/users/:brandName',
        element:<BrandPages></BrandPages>,
      },
      {
        path:'/product/:bandName',
        element:<ShowProduct></ShowProduct>,
    
      }
    ]
  },


])


ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
<React.StrictMode>

<ToastContainer />
     <RouterProvider router={router} />
  </React.StrictMode>,
</AuthProvider>
)
