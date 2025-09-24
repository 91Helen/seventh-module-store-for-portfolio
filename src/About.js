import { useNavigate } from "react-router-dom";
import logo from './logo.png';

function About() {
  const navigate = useNavigate();

  return (
    <>
      <div className="about-page">
        <div className="about-banner">
          <img 
            src="https://images.unsplash.com/photo-1713693212314-e49514b01ec3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Fashion banner" 
          />
        </div>

        <h1>FEEL & WEAR</h1>
        <p>
          Welcome to <strong>Fashion Store</strong> — your place for stylish and comfortable clothing.  
          We believe that fashion should be accessible, high-quality, and timeless.
        </p>

        <p>
          Our mission is to help you look confident every day with carefully selected collections 
          that combine elegance and comfort.
        </p>

        <h3>Why choose us?</h3>
        <ul>
          <li>✨ Free standard shipping on all orders</li>
          <li>👗 Wide range of styles for every occasion</li>
          <li>🌱 Eco-friendly materials</li>
          <li>💬 Friendly customer support</li>
        </ul>

        <p>
          Thank you for choosing us — we’re happy to be part of your style journey!
        </p>

        <div className="btn-center">
          <button className="change" onClick={() => navigate("/")}>Go back</button>
        </div>
      </div>

      <footer className="clothes-footer">
        <img src={logo} alt="Logo" className="clothes-logo" />
        <p>© 2025 Online Fashion Store. All rights reserved.</p>
      </footer>
    </>
  );
}

export default About;
