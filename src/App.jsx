import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Speakers from './pages/Speakers';
import Headphones from './pages/Headphones';
import Earphones from './pages/Earphones';
import Home from './Pages/Home';
import Header from './components/Header/Header';
import './App.css'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        
      </Routes>
    </Router>
  )
}

export default App
