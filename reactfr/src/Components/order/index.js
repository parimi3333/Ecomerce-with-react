import React from 'react'
import { useState } from 'react';
import "./index.css"

function Orders() {
    const [items, setItems] = useState([
        {
            "title": "Virgin Avocado Oil",
            "brand": "ProV",
            "price": 4144,
            "prodid": 42,
            "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png",
            "rating": 3.4,
            "orderid": "AAAA"
        }
    ]);

    return (
        <div className='order'>
            {items.map((item, index) => (
                <div key={index} className="order-container">
                    <img src={item.image_url} alt={item.title} className='order-image'/>
                    <div className='order-text'>
                        <h2>{item.title}</h2>
                        <p>Brand: {item.brand}</p>
                        <p>Price: ${item.price}</p>
                        <p>Rating: {item.rating}</p>
                        <p>Wish ID: {item.orderid}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Orders