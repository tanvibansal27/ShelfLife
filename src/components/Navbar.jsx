
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { PiLeafFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
function Navbar({ search, setSearch , category,
  setCategory,}) {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const handleSearch = () => {
  if (search.trim() !== "") {
    navigate(`/shop?search=${search}`);
  } else {
    navigate("/shop");
  }
};
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
  <h1>
    <PiLeafFill className="logo-leaf" />
    ShelfLife
  </h1>
  <p>Fresh & Healthy</p>
</div>

      {/* Search */}
      <div className="search-container">
        <input
  type="text"
  placeholder="Search products..."
  className="search-bar"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
/>

        <button
  className="search-btn"
  onClick={handleSearch}
>
  <FaSearch />
</button>
      </div>

      {/* Category */}
      <select
  className="category-select"
  value={category}
  onChange={(e) => {
    const value = e.target.value;
    setCategory(value);

    if (value === "") {
      navigate("/shop");
    } else {
      navigate(`/shop?category=${value}`);
    }
  }}
>
  <option value="">All Categories</option>
  <option value="Fruits">Fruits</option>
  <option value="Dairy">Dairy</option>
  <option value="Beverages">Beverages</option>
  <option value="Snacks">Snacks</option>
  <option value="Staples">Staples</option>
</select>

      {/* Icons */}
      <div className="nav-icons">

  <Link to="/cart" className="cart-link">
    <FaShoppingCart />
    <span className="nav-text">Cart</span>

    <span className="cart-count">
      {cartItems.length}
    </span>
  </Link>

  <Link to="/dashboard" className="account-link">
    <FaUser />
    <span className="nav-text">Account</span>
  </Link>

</div>

    </nav>
  );
}

export default Navbar;