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


// Här skapar jag strukturen för react-router och säger vilka sidor som används.
// Vi har även ett errorElement som används om man skrivit in en url som inte finns.
// Jag importerar även de nödvändiga funktionerna från redux och store för att få ett fungerande tema på hemsidan och
// wrappar Provider store runt Router för att globalState ska finnas i alla komponenter.


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
