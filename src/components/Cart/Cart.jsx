import React, { useState, useEffect } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import './Cart.css';
import Button from '../Button/Button';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [totalCost, setTotalCost] = useState(0);

  // Calculate total cost whenever cart items change
  useEffect(() => {
    let total = 0;
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach(item => {
        total += item.price * item.quantity;
      });
    }
    setTotalCost(total);
  }, [cartItems]);

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleQuantityChange = (index, newQuantity) => {
    updateQuantity(index, newQuantity);
  };

  return (
    <div className='cart__container'>
      <div className="cart_title">
        <h4>CART <span className='item__num'>({cartItems.length})</span></h4>
        <p>Remove All</p>
      </div>
      <ul>
        {cartItems && cartItems.length > 0 && cartItems.map((item, index) => (
          <li key={index}>
            <div className="item__desc">
              <img src={item.image} alt="" />
              <p className='price'>
                <span className='item_name'>{item.name}</span>
                <span>$ {item.price}</span>
              </p>
              <p className='quantity__desc'>
                <span 
                  className='minus'
                  onClick={() => handleQuantityChange(index, Math.max(0, item.quantity - 1))}
                >
                  <FaMinus/>
                </span>
                <span className='num'>{item.quantity}</span>
                <span 
                  className='plus'
                  onClick={() => handleQuantityChange(index, item.quantity + 1)}
                >
                  <FaPlus />
                </span>
              </p>
              <span className='remove' onClick={() => handleRemoveItem(index)}>X</span>
            </div>
            
          </li>
        ))}
      </ul>
      <div className="total__price">
        <span>Total: </span>
        <h3>${totalCost}</h3>
      </div>
      
      <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="Checkout" />
    </div>
  );
};

export default Cart;
