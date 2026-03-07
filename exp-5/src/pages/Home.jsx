import welcomeImg from "../assets/shop.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero">

        <div className="hero-text">
          <h1>Welcome to ShopCart</h1>
          <p>
            Buy the best electronics at the best price.  
            Add items to your cart and checkout easily.
          </p>

          <Link to="/products">
            <button className="shop-btn">Shop Now</button>
          </Link>
        </div>

        <img src={welcomeImg} alt="shopping" className="hero-img" />

      </div>

      {/* Features Section */}

      <div className="features">

        <div className="feature-card">
          🚚
          <h3>Fast Delivery</h3>
          <p>Get your order delivered quickly.</p>
        </div>

        <div className="feature-card">
          💳
          <h3>Secure Payment</h3>
          <p>Safe and secure checkout system.</p>
        </div>

        <div className="feature-card">
          ⭐
          <h3>Best Quality</h3>
          <p>Top rated electronics and gadgets.</p>
        </div>

      </div>

      {/* Offer Section */}

      <div className="offer">
        <h2>🔥 Special Offer</h2>
        <p>Get up to 40% discount on electronics today!</p>
      </div>

    </div>
  );
}

export default Home;