import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import { FaBars, FaShoppingCart } from "react-icons/fa"
import Category from "../categories/Category"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className='logo'>
          <FaBars className='header__menu' onClick={toggleMenu}/>
          <h1 className="header__title">audiophile</h1>
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
        <div className="header__cart">
          <Link to="/checkout">
            <FaShoppingCart/>
          </Link>
        </div>
      </div>
      {isMenuOpen && <Category />}
    </header>
  );
};

export default Header;