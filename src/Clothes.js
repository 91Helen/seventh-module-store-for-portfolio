import React from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png'; 

function Clothes({ anyClothes }) {
  return (
    <div className="clothes-page">
      <div className="clothes-header">
   
      </div>

      <div className="products">
        {anyClothes.map((element) => {
          const { id, name, searchTerm, price, image, title } = element;

          return (
            <div className="product-card" key={id}>
              <img src={image} alt={name} className="product-image" />
              <div className="product-info">
                <h2>{name}</h2>
                <h3>{searchTerm}</h3>
                <h4>$ {price}</h4>
              </div>
              <Link to={`/about/${title}`}>More</Link>
            </div>
          );
        })}
      </div>
      <footer className="clothes-footer">
  <img src={logo} alt="Logo" className="clothes-logo" />
  <p>© 2025 MyShop. All rights reserved.</p>
</footer>
    </div>
  );
}

export default Clothes;
