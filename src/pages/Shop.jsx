import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
const API = "https://shelflife-5ob7.onrender.com";
function Shop() {
  const location = useLocation();
const navigate = useNavigate();
const params = new URLSearchParams(location.search);
  
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  

const [search, setSearch] = useState(
  params.get("search") || ""
);
  const [category, setCategory] = useState(
  params.get("category") || ""
);
useEffect(() => {
  const params = new URLSearchParams(location.search);

  setSearch(params.get("search") || "");
  setCategory(params.get("category") || "");
}, [location.search]);
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState("");

  useEffect(() => {
  let url = `${API}/api/products?`;

if (search) {
  url += `search=${search}&`;
}

if (category) {
  url += `category=${category}&`;
}

if (maxPrice) {
  url += `maxPrice=${maxPrice}&`;
}

if (sort) {
  url += `sort=${sort}&`;
}

console.log(url);
  axios
    .get(url)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [search, category, maxPrice, sort]);
useEffect(() => {
  const params = new URLSearchParams();

  if (search) params.set("search", search);
  if (category) params.set("category", category);

  navigate(`/shop?${params.toString()}`, { replace: true });

}, [search, category]);
  return (
    <>
      <Navbar
  search={search}
  setSearch={setSearch}
  category={category}
  setCategory={setCategory}
/>
      <MenuBar />

      <div className="shop-container">
        <div className="sidebar">
          <h3>Categories</h3>
<label>
  <input
    type="radio"
    name="category"
    value=""
    checked={category === ""}
    onChange={() => setCategory("")}
  />
  All
</label>
          <label>
  <input
    type="radio"
    name="category"
    value="Fruits"
    checked={category === "Fruits"}
    onChange={(e) => setCategory(e.target.value)}
  />
  Fruits & Vegetables
</label>

<label>
  <input
    type="radio"
    name="category"
    value="Dairy"
    checked={category === "Dairy"}
    onChange={(e) => setCategory(e.target.value)}
  />
  Dairy & Eggs
</label>

<label>
  <input
    type="radio"
    name="category"
    value="Beverages"
    checked={category === "Beverages"}
    onChange={(e) => setCategory(e.target.value)}
  />
  Beverages
</label>

<label>
  <input
    type="radio"
    name="category"
    value="Snacks"
    checked={category==="Snacks"}
    onChange={(e) => setCategory(e.target.value)}
  />
  Snacks
</label>

<label>
  <input
    type="radio"
    name="category"
    value="Staples"
    checked={category==="Staples"}
    onChange={(e) => setCategory(e.target.value)}
  />
  Staples
</label>
<label>
  <input
    type="radio"
    name="category"
    value="Personal Care"
    checked={category === "Personal Care"}
    onChange={(e) => setCategory(e.target.value)}
  />
  Personal Care
</label>

<label>
  <input
    type="radio"
    name="category"
    value="Home Care"
    checked={category === "Home Care"}
    onChange={(e) => setCategory(e.target.value)}
  />
  Home Care
</label>
          <h3>Filter by Price</h3>

          <input
  type="range"
  min="0"
  max="500"
  value={maxPrice}
  onChange={(e) => setMaxPrice(e.target.value)}
/>

<p>₹{maxPrice}</p>
          <button>Filter</button>
        </div>

        <div className="products-area">
          <div className="shop-header">
            <h2>Shop</h2>

            <select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
>
  <option value="">Popularity</option>
  <option value="low">Price Low to High</option>
  <option value="high">Price High to Low</option>
</select>
          </div>

          <div className="shop-grid">
            {products.map((product, index) => (
              <div className="shop-card" key={product._id}>
                <Link
    to={`/product/${product._id}`}
    className="product-link"
  >
                <div className="shop-image">
                <img
                  src={product.image}
                  alt={product.title}
                  width="120"
                />
              </div>

              <h4>{product.title}</h4>

              <p>₹{product.price}</p>
              </Link>
                <button onClick={() => addToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Shop;