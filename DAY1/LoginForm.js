import React, { useState } from 'react';
import './LoginForm.css';

const CategoryPage = () => {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([
    { id: 1, name: 'Action Figures', price: 19.99 },
    { id: 2, name: 'Building Blocks', price: 15.99 },
    { id: 3, name: 'Dolls', price: 24.99 },
    // Add more categories as needed
  ]);

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
      <h2>Explore Our Toy Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <h3>{category.name}</h3>
            <p className="price">${category.price.toFixed(2)}</p>
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

export default CategoryPage;
