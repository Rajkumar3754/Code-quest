import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import {  remove } from '../store/cartSlice';
 // Assuming you have a CSS file for styles

const Carts = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

 
  const removeToCart= (id) => {
    dispatch(remove(id));
  };


  
  const cards = products.map(product => (
    <div className='col-md-12' key={product.id} style={{ marginBottom: '10px' }}>
      <Card style={{ width: '18rem' }}>
        <div className='text-center'>
          <Card.Img 
            variant="top" 
            src={product.image} 
            alt={product.title} 
            className='product-image'
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button 
            variant="danger" 
            onClick={() => removeToCart(product.id)}
          >
        Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <div className='row'>
        {cards}
      </div>
    </div>
  );
};

export default Carts;
