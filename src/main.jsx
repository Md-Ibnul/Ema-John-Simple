import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/shop/Shop';
import Orders from './components/orders/Orders';
import Inventory from './components/inventory/Inventory';
import Login from './components/Log-in/Login';
import cartProductLoader from './loader/cartProductsLoader';
import Checkout from './checkout/Checkout';
import SignUp from './sign-up/SignUp';
import AuthProvider from './components/providers/AuthProvider';
import PrivateRoute from './routs/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Shop />
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: cartProductLoader
      },
      {
        path: '/inventory',
        element: <PrivateRoute><Inventory /></PrivateRoute>
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
