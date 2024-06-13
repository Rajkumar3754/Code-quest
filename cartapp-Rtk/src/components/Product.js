import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(result => setProducts(result));
  }, []);

  const addToCart = (Product)=>{
    dispatch(add(Product))
  }

  const cards = products.map(product => (
    <div className='col-md-3' key={product.id} style={{marginBottom:'10px'}} >
      <Card style={{ width: '18rem' }} >
        <div className='text-center'>
        <Card.Img variant="top" src={product.image} alt={product.title} style={{width:'100px',height:'130px'}}    />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer  >
        <Button variant="primary"  style={{backgroundColor:'blue',border:'2px'}} onClick={()=>addToCart(product)} >Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h2>Product DashBoard</h2>
      <div className='row'>
        {cards}
      </div>
    </div>
  );
};

export default Product;
