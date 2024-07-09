import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Questions from './Components/Questions/Questions.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>
  },
  {
    path : '/questions/:id',
    element : <Questions></Questions>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
