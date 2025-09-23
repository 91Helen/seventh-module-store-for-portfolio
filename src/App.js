import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import './App.css'
import About from './About';
import Contactus from './Contactus';
import AboutProduct from './AboutProduct';
import logo from './logo.png';

function App () {
  return (
    <Router>
      <nav>
        <div className="logo">
  
          <Link to="/">
           <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className='link'>Shop</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/contactus" className='link'>Contact us</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path='/about/:title' element={<AboutProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
