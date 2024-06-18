import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home/Home';
import List from './assets/pages/Hotel_list/List';
import Hotel from './assets/pages/Hotel_details/Hotel';
import Auth from './assets/pages/Auth/Auth.jsx'
import Register from './assets/components/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  children: ([
  {
    index:true,
    element: <Home/>,
  },
  {
    path: '/Hotels',
    element: <List/>,
  },
  {
    path: '/Hotels/:id',
    element: <Hotel/>
  },
  {
    path: '/auth',
    element: <Auth/>
  },
  {
    path: '/Register',
    element: <Register/>
  }
])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
