import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home/Home';
import List from './assets/pages/Hotel_list/List';
import Hotel from './assets/pages/Hotel_details/Hotel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  children: ([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/Hotels',
    element: <List/>,
  },
  {
    path: '/Hotels/:id',
    element: <Hotel/>
  }
])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
