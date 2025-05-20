import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider , createRoutesFromElements } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'


function App() {

  return (
    <>
      <Product />
    </>
  )
}

export default App
