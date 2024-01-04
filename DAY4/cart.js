import React, { useState,useEffect } from 'react';
import './cart.css';

const Cart= () => {
  const [cart, setCart] = useState([]);
  const [categories] = useState([
    { id: 1, name: 'Bettyma ATV RC', price: 39999 ,image:'https://hmadmin.hamleys.in/product/493663465/300/493663465-1.jpg'},
    { id: 2, name: 'Zoozi 2', price: 5399 ,image:'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492363468/300/492363468_-_1.jpeg'},
    { id: 3, name: 'Swing Car', price: 3999,image:'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492365373/300/492365373__-_1.jpeg' },
    { id: 3, name: 'Uboard Infinity', price:27999,image:'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409219/300/492409219_-_1.jpeg' },
    { id: 3, name: 'Ralleyz Astra Cycle', price: 8399,image:'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492407619/300/492407619_9611.webp' },
  ]);
  useEffect(() => {
    document.body.classList.add('cart-page');
    return () => {
      document.body.classList.remove('cart-page');
    };
  }, []);

  const handleAddToCart = (category) => {
    setCart([...cart, category]);
  };

  const handleRemoveFromCart = (categoryId) => {
    const updatedCart = cart.filter((item) => item.id !== categoryId);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Implement your checkout logic (e.g., navigate to a checkout page)
    alert('Checkout functionality will be implemented in the future!');
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="category-page">
      <h2>Explore Our Toys</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category.id} className="category-card" >
            <h3>{category.name}</h3>
            <img src={category.image} alt={category.name} className='category-image'/>
            <p className="price">₹{category.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(category)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-section">
        <h2>Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is waiting to be filled with joy!</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price.toFixed(2)}
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="total-section">
              <p>Total Amount: ${getTotalAmount()}</p>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;