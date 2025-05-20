import React from 'react'
import { useState , useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const  Product = () => {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(data=>data.json())
    .then(result=>getProducts(result))
  },[]);
  
   const cards = products.map((product) => (
    <div className="col-md-3">
      <Card key={product.id} className="h-100" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} style={{width : '100px', height: '100px'}}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR {product.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{backgroundColor:'white'}}>
      <Button variant="primary">ADD TO CART</Button>
      </Card.Footer>
    </Card>

    </div>
   ))

  return (
    <div>
      <h1>PRODUCT Dashboard</h1>
      <div className="row">
        {cards}

      </div>
    </div>
  )
}

export default Product;
