import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route } from 'react-router-dom'
import { RouterProvider, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Product from './components/Product'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Rootlayout from './components/Rootlayout';

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
