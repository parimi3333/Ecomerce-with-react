import React from 'react'
import { useState } from 'react';
import "./index.css"

function Wishlist() {
    const [items, setItems] = useState([
        {
            "title": "Virgin Avocado Oil",
            "brand": "ProV",
            "price": 4144,
            "prodid": 42,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png",
            "rating": 3.4,
            "wishid": "AAAA"
        }
    ]);

    return (
        <div className='whishlist'>
            {items.map((item, index) => (
                <div key={index} className="whishlist-container">
                    <img src={item.image_url} alt={item.title} className='wishlist-image'/>
                    <h2>{item.title}</h2>
                    <div className='whishlist-text'>
                    <p>Brand: {item.brand}</p>
                    <p>Price: ${item.price}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Wish ID: {item.wishid}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Wishlist