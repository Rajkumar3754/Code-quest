// Product.js
import React, { useEffect, useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap'; // Import Alert from react-bootstrap for alerts
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/ProductSlice';
import { add } from '../store/cartSlice'; // Assuming this is your cart slice import

const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product); // Corrected useSelector usage to access data and status
    const [loadingAlert, setLoadingAlert] = useState(false); // State to control showing/hiding alert

    useEffect(() => {
        setLoadingAlert(status === 'loading');
        
        // Optional: Delay hiding the alert for demonstration purposes
        if (status === 'loading') {
            const timeoutId = setTimeout(() => {
                setLoadingAlert(false);
            }, 2000); // Hides alert after 2 sec (adjust as needed)
            return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount or status change
        }
    }, [status]);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    const addToCart = (product) => {
        dispatch(add(product));
    };

    const renderProducts = () => {
        if (status === 'error') {
            return <p>Error fetching products</p>;
        }

        if (!products || products.length === 0) {
            return <p>No products found</p>;
        }

        return products.map((product) => (
            <div className='col-md-3' key={product.id} style={{ marginBottom: '10px' }}>
                <Card style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <Card.Img variant="top" src={product.image} alt={product.title} style={{ width: '100px', height: '130px' }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" style={{ backgroundColor: 'blue', border: '2px' }} onClick={() => addToCart(product)}>Add to Cart</Button>
                    </Card.Footer>
                </Card>
            </div>
        ));
    };

    return (
        <div>
            <h2>Product Dashboard</h2>
            {loadingAlert && <Alert variant="info">Loading products...</Alert>} {/* Display alert for loading */}
            <div className='row'>
                {renderProducts()}
            </div>
        </div>
    );
};

export default Product;
