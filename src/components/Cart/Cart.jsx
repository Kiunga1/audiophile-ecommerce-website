import { } from 'react';
import { useCart } from '../../context/CartContext';
// import { FaMinus, FaPlus } from "react-icons/fa";
import './Cart.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, total, addToCart, removeFromCart, clearCart } = useCart();

  // const handleIncreaseQuantity = (itemId) => {
  //   addToCart(cartItems.find(item => item.id === itemId));
  // };

  const handleIncreaseQuantity = (itemId) => {
    const itemToUpdate = cartItems.find(item => item.id === itemId);
    if (itemToUpdate) {
      itemToUpdate.quantity += 1;
      addToCart(itemToUpdate);
    }
  };
  

  const handleDecreaseQuantity = (itemId) => {
    removeFromCart(itemId);
  };

  // const handleAddOne = (itemId) => {
  //   const itemToUpdate = cartItems.find((item) => item.id === itemId);
  //   if (itemToUpdate) {
  //     itemToUpdate.quantity += 1;
  //     addToCart(itemToUpdate);
  //   }
  // };

  // const handleAddOne = (itemId) => {
  //   handleIncreaseQuantity(itemId);
  // };

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
              <img src={item.image.desktop} alt="product image" />
              <p className='price'>
                <span className='item_name'>{item.name}</span>
                <span>$ {item.price.toLocaleString()}</span>
              </p>
              
              <p className='quantity__desc'>
                <button className='minus' onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <button className='num' >{item.quantity}</button>
                <button className='plus' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="total__price">
        <span>Total: </span>
        <h3>${total.toLocaleString()}</h3>
      </div>
      <Link to='/checkout'>
        <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="Checkout" fullWidth={true} />  
      </Link>
    </div>
  );
};

export default Cart;
