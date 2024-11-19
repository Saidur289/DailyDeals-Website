import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import "react-toastify/dist/ReactToastify.css";
import 'animate.css';
import { ToastContainer } from 'react-toastify'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
