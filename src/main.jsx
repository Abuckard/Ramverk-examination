import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Project from './components/Project/Project.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import {Provider} from "react-redux"
import {store} from "./store.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
