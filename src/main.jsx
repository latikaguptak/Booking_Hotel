import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home/Home';
import List from './assets/pages/Hotel_list/List';
import Hotel from './assets/pages/Hotel_details/Hotel';
import Auth from './assets/pages/Auth/Auth.jsx'
import {SearchContextProvider }from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext.jsx'
import Reserve from './assets/components/reserve/Reserve.jsx'


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
    path: '/login',
    element: <Auth  authType = 'true'/>
  },
  {
    path: '/Register',
    element: <Auth authType ='false'/>
  },
  // {
  //   path: '/Reserve',
  //   element: <Reserve  setOpen = 'true' />
  // }
])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <SearchContextProvider>
      <RouterProvider router={router}/>
    </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
