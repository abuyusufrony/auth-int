import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Singup from './Components/Singup/Singup.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'
import Orders from './Components/orders/Orders.jsx'
import PrivateRoutes from './Routes/PrivateRoutes.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Root></Root>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/Singup',
      element: <Singup></Singup>,
    },
    {
      path: '/orders',
      element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
    }

  ]
}])
createRoot(document.getElementById('root')).render(


  < StrictMode >
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode >,
)
