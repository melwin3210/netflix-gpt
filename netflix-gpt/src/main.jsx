import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './components/LoginForm.jsx'
import HomePage from './components/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <LoginForm /> },
      { path: 'home', element: <HomePage /> },
      // Add more routes here
    ]
  },
])

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
