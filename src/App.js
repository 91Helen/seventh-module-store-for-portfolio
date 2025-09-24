import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contactus from "./Contactus";
import AboutProduct from "./AboutProduct";
import Nav from "./Nav"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/about/:title" element={<AboutProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
