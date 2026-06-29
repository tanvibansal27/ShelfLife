import heroImage from "../assets/image.png";
import { FaArrowRight, FaTags } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-tag">
          🌿 100% Fresh & Healthy
        </div>

        <h1>
          Fresh Groceries
          <br />
          Delivered to Your
          <br />
          <span>Doorstep</span>
        </h1>

        <p>
          Get the best quality groceries & daily essentials
          at unbeatable prices.
        </p>

        <div className="hero-buttons">

          <button
            className="shop-btn"
            onClick={() => navigate("/shop")}
          >
            Shop Now
            <FaArrowRight />
          </button>

          <button
  className="deal-btn2"
  onClick={() => navigate("/eals")}
>
  <FaTags />
  Explore Deals
</button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-glow"></div>

        <img
          src={heroImage}
          alt=""
          className="hero-image"
        />

        


      </div>

    </section>
  );
}

export default Hero;