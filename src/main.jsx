import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/pages/Layout/Roots/Roots.jsx';
import Home from './components/pages/Home/Home.jsx';
import Booking from './components/pages/Booking/Booking.jsx';
import Login from './components/pages/LoginPage/Login.jsx';
import Register from './components/pages/CreateAccount/Register.jsx';
import SearchLocation from './components/pages/SearchLocation/SearchLocation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/booking",
        element:<Booking></Booking>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/create-account",
        element:<Register></Register>,
      },
      {
        path:"/search-location",
        element:<SearchLocation></SearchLocation>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
