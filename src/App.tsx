import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home/Home'
import NotFound from './views/NotFound/NotFound'
import CompanyDetails from './views/CompanyDetails/CompanyDetails'
import Header from './components/Header/Header'
import Contact from './views/Contact/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: ":id",
    element: <CompanyDetails />
  },
])

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </> 
  )
}

export default App