import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'

import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import Login from './Pages/Login/Login.jsx';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
