import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryDetailPage.css';

const CategoryDetailPage = () => {
  const { categoryId } = useParams();
  const [cart, setCart] = useState([]);
  const [categoryItems, setCategoryItems] = useState({
    1: [
      { id: 11, name: 'Superhero Action Figure', price: 29.99 },
      { id: 12, name: 'Adventure Explorer Action Figure', price: 24.99 },
    ],
    2: [
      { id: 21, name: 'Creative Building Blocks Set', price: 15.99 },
      { id: 22, name: 'Colorful Building Blocks', price: 19.99 },
    ],
    3: [
      { id: 31, name: 'Baby Doll', price: 24.99 },
      { id: 32, name: 'Fashion Doll', price: 29.99 },
    ],
    // Add more items as needed
  });

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="category-detail-page">
      <h2>{`Items in Category ${categoryId}`}</h2>
      <div className="item-list">
        {categoryItems[categoryId]?.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
