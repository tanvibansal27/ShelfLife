import { useNavigate } from "react-router-dom";

import fruits from "../assets/categories/fruits.png";
import dairy from "../assets/categories/dairy.png";
import beverages from "../assets/categories/beverages.png";
import snacks from "../assets/categories/snacks.png";
import staples from "../assets/categories/staples.png";
import personalCare from "../assets/categories/personal-care.png";
import homeCare from "../assets/categories/home-care.png";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      image: fruits,
      name: "Fruits & Vegetables",
      value: "Fruits",
    },
    {
      image: dairy,
      name: "Dairy & Eggs",
      value: "Dairy",
    },
    {
      image: beverages,
      name: "Beverages",
      value: "Beverages",
    },
    {
      image: snacks,
      name: "Snacks",
      value: "Snacks",
    },
    {
      image: staples,
      name: "Staples",
      value: "Staples",
    },
    {
      image: personalCare,
      name: "Personal Care",
      value: "Personal Care",
    },
    {
      image: homeCare,
      name: "Home Care",
      value: "Home Care",
    },
  ];

  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2>Categories</h2>
        <span>View All</span>
      </div>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div
            className="category-item"
            key={index}
            onClick={() => navigate(`/shop?category=${item.value}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="category-icon">
              <img
                src={item.image}
                alt={item.name}
                className="category-img"
              />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;