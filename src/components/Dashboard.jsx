import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Redux Store</h1>
      <p>Browse our products and add them to your cart</p>
      <Link to="/products" className="btn btn-primary">
        View Products
      </Link>
    </div>
  )
}

export default Dashboard
