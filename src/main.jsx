import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contact from './components/Contact/Contact.jsx'
import Project from './components/Project/Project.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contact />,
    errorElement: <NotFound />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
