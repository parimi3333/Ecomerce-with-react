import React, { useState, useEffect } from 'react';
import "./index.css"
import apiUrl from '../../apiurl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Products() {
    const [items, setItems] = useState([]);
    const [cookies, removeCookie] = useCookies(['Token']);
    const [token, setToken] = useState(cookies.Token);
    let history = useNavigate()
    console.log(token)
    if(token===""){
        history("/login")
    }
    useEffect(() => {
        if (items.length === 0) {
            axios.get(`${apiUrl}core/products`)
                .then(res => {
                    setItems(res.data);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        }
    }, [items]);

    const handleAddToCart = (product) => {
        axios.post(`${apiUrl}core/cart`, product, { headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          }}).then(res => console.log(res.data))
    };

    const handleAddToWishlist = (product) => {
        axios.post(`${apiUrl}core/wishlist`, product, { headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          }}).then(res => console.log(res.data))
    };

    return (
        <div className='product'>
            {items.map((item, index) => (
                <div key={index} className="product-container">
                    <img src={item.image_url} alt={item.title} className='product-image' />
                    <div className="product-text">
                        <h2>{item.title}</h2>
                        <p>Brand: {item.brand}</p>
                        <p>Price: ${item.price}</p>
                        <p>Rating: {item.rating}</p>
                        <button type='button' onClick={() => handleAddToCart(item)}>Add to cart</button>
                        <button type='button' onClick={() => handleAddToWishlist(item)}>Add to wishlist</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
