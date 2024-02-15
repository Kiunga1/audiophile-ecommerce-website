import { } from 'react';
import { useCart } from '../../context/CartContext';
// import { FaMinus, FaPlus } from "react-icons/fa";
import './Cart.css';
import Button from '../Button/Button';

const Cart = () => {
  const { cartItems, total, addToCart, removeFromCart, clearCart } = useCart();

  const handleIncreaseQuantity = (itemId) => {
    addToCart(cartItems.find(item => item.id === itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };


  return (
    <div className='cart__container'>
      <div className="cart_title">
        <h4>CART <span className='item__num'>({cartItems.length})</span></h4>
        <p onClick={handleClearCart}>Remove All</p>
      </div>
      <ul>
        {cartItems && cartItems.length > 0 && cartItems.map((item, index) => (
          <li key={index}>
            <div className="item__desc">
              <img src={item.image.mobile} alt="" />
              <p className='price'>
                <span className='item_name'>{item.name}</span>
                <span>$ {item.price}</span>
              </p>
              
              <p className='quantity__desc'>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <button >{item.quantity}</button>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="total__price">
        <span>Total: </span>
        <h3>${total}</h3>
      </div>
      
      <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="Checkout" />
    </div>
  );
};

export default Cart;
