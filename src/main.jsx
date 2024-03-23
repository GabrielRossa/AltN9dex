import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home'
import { About } from './pages/about'
import { Explore } from './pages/Explore'
import { Skills } from './pages/skills'
import { Contact } from './pages/contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/explore",
    element: <Explore/>
  },
  {
    path: "/skills",
    element: <Skills/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
