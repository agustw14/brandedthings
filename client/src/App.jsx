// import { useState } from 'react'
// import './App.css'
// import Navbar from './component/Navbar'
// import Home from './component/Home'

import { RouterProvider } from "react-router-dom"
import router from "./routers"

export default function App() {
  // const [page, setPage] = useState('home')

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
