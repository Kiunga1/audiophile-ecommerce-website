/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import { FaBars, FaShoppingCart } from "react-icons/fa"
import Category from "../categories/Category"
import Cart from '../Cart/Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  //Toggle visibility of cart component
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className='logo'>
          <FaBars className='header__menu' onClick={toggleMenu}/>
          <Link to='/'>
            <h1 className="header__title">audiophile</h1>
          </Link>
        </div>
        <ul className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
          <li className="header__nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/headphones">HEADPHONES</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/speakers">SPEAKERS</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/earphones">EARPHONES</Link>
          </li>
        </ul>
        <div className="header__cart" onClick={toggleCart}>
            <FaShoppingCart/>
        </div>
      </div>
      <div className='navbar'>
        {isMenuOpen && <Category />}
      </div>
      <div className="cart">
        {isCartOpen && <Cart />}
      </div>
      
    </header>
  );
};

export default Header;