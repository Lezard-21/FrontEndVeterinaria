import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './routes/Login.jsx'
import ListaVideojuegos from './routes/ListaVideojuegos.jsx'
import  './root.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/login",
    element: <Login />
  },{
    path: "/videojuegos",
    element: <ListaVideojuegos />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)