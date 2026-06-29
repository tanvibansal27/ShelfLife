import { PiLeafFill } from "react-icons/pi";
import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

import {
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaShoppingBasket,
  FaUsers,
  FaRecycle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <MenuBar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-content">
          <span className="about-tag">🌱 About ShelfLife</span>

          <h1>Fresh Groceries. Smarter Shopping.</h1>

          <p>
            ShelfLife helps customers buy fresh groceries at affordable
            prices while reducing food waste through smart discounts,
            sustainable shopping, and fast doorstep delivery.
          </p>

          <div className="about-buttons">
            <button
              className="shop-btn"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>

            <button
              className="contact-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="about-illustration">

  <div className="about-brand">
    <div className="leaf leaf1">🍃</div>
<div className="leaf leaf2">🍃</div>
<div className="leaf leaf3">🍃</div>
    <h1>
      <PiLeafFill className="about-logo-leaf" />
      ShelfLife
    </h1>

    <p>Fresh & Healthy</p>

    <span className="brand-subtitle">
    Smart Grocery Platform
</span>
    

  </div>

</div>
      </section>

      {/* Features */}
      <section className="features-section">

        <div className="feature-card">
          <FaTruck />
          <h3>Fast Delivery</h3>
          <p>
            Get groceries delivered to your doorstep quickly.
          </p>
        </div>

        <div className="feature-card">
          <FaLeaf />
          <h3>Fresh Products</h3>
          <p>
            Farm fresh vegetables, fruits and groceries.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt />
          <h3>Secure Payments</h3>
          <p>
            Safe and secure payment experience every time.
          </p>
        </div>

        <div className="feature-card">
          <FaShoppingBasket />
          <h3>Best Prices</h3>
          <p>
            Daily discounts and amazing grocery offers.
          </p>
        </div>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>50K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Orders Delivered</p>
        </div>

        <div className="stat-card">
          <h2>4.9★</h2>
          <p>Customer Rating</p>
        </div>

      </section>

      {/* Mission */}

      <section className="mission-section">

        <h2>Our Mission</h2>

        <p>
          ShelfLife aims to reduce food waste while helping people save
          money. We connect customers with fresh groceries, daily deals
          and sustainable shopping experiences.
        </p>

      </section>

      {/* Values */}

      <section className="values-section">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">
            <FaRecycle />
            <h3>Sustainability</h3>
            <p>Reducing food waste for a greener tomorrow.</p>
          </div>

          <div className="value-card">
            <FaUsers />
            <h3>Customer First</h3>
            <p>Your satisfaction is our highest priority.</p>
          </div>

          <div className="value-card">
            <FaLeaf />
            <h3>Healthy Living</h3>
            <p>Providing fresh groceries every single day.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>Ready to Start Shopping?</h2>

        <p>
          Explore thousands of fresh products with amazing offers.
        </p>

        <button onClick={() => navigate("/shop")}>
          Explore Products
        </button>

      </section>

      <Footer />
    </>
  );
}

export default About;