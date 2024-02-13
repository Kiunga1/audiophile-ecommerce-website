import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EarphonesPage from './Pages/Categorypages/EarphonesPage';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'
import HeadphonesPage from './Pages/Categorypages/HeadphonesPage';
import SpeakersPage from './Pages/Categorypages/SpeakersPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { useState } from 'react';
//import CategoryPage from './Pages/Categorypages/CategoryPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };
  return (
    <Router>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage/>} />
        <Route path="/earphones" element={<EarphonesPage />} />
        {/* <Route path="/category/:category" component={CategoryPage} /> */}
        <Route path="/product/:slug" element={<ProductDetails cartItems={cartItems} addToCart={addToCart}/>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App