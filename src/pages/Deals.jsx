import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

import apple from "../assets/products/apple.png";
import milk from "../assets/products/milk.png";
import bread from "../assets/products/bread.png";
import banana from "../assets/products/banana.png";

import { useCart } from "../context/CartContext";
function Deals() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();
  const deals = [
    {
      name: "Fresh Apples",
      image: apple,
      oldPrice: 120,
      newPrice: 96,
      discount: "20% OFF",
      category: "Fruits",
    },
    {
      name: "Fresh Milk",
      image: milk,
      oldPrice: 56,
      newPrice: 48,
      discount: "15% OFF",
      category: "Dairy",
    },
    {
      name: "Brown Bread",
      image: bread,
      oldPrice: 45,
      newPrice: 40,
      discount: "10% OFF",
      category: "Snacks",
    },
    {
      name: "Banana",
      image: banana,
      oldPrice: 60,
      newPrice: 48,
      discount: "20% OFF",
      category: "Fruits",
    },
  ];

  const filteredDeals =
    selectedCategory === "All"
      ? deals
      : deals.filter(
          (item) =>
            item.category.toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  return (
    <>
      <Navbar />
      <MenuBar />

      <section className="deals-hero">
        <div>
          <h1>🔥 Mega Deals</h1>

          <p>Save up to 50% on fresh groceries today.</p>

          <div className="countdown">
            <span>02</span>
            <span>:</span>
            <span>18</span>
            <span>:</span>
            <span>40</span>
          </div>

          <button onClick={() => navigate("/shop")}>
            Shop Now
          </button>
        </div>
      </section>

      <div className="deal-category">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          className={selectedCategory === "Fruits" ? "active" : ""}
          onClick={() => setSelectedCategory("Fruits")}
        >
          Fruits
        </button>

        <button
          className={selectedCategory === "Dairy" ? "active" : ""}
          onClick={() => setSelectedCategory("Dairy")}
        >
          Dairy
        </button>

        <button
          className={selectedCategory === "Snacks" ? "active" : ""}
          onClick={() => setSelectedCategory("Snacks")}
        >
          Snacks
        </button>

        <button
          className={selectedCategory === "Beverages" ? "active" : ""}
          onClick={() => setSelectedCategory("Beverages")}
        >
          Beverages
        </button>
      </div>

      <div className="deals-grid">
        {filteredDeals.map((item, index) => (
          <div className="deal-card" key={index}>
            <span className="discount">
              {item.discount}
            </span>

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <div className="price">
              <span className="old">
                ₹{item.oldPrice}
              </span>

              <span className="new">
                ₹{item.newPrice}
              </span>
            </div>

            <button
  onClick={() =>
    addToCart({
      ...item,
      quantity: 1,
    })
  }
>
  Add To Cart
</button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Deals;