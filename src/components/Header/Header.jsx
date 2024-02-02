import './Header.css'
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className='logo'>
        <FaBars className='header__menu' icon={FaBars} />
        <h1 className="header__title">audiophile</h1>
      </div>
      
      <ul className="header__nav">
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
        <FaShoppingCart icon={FaShoppingCart} />
      </Link>
      </div>
    </header>
  );
};

export default Header;