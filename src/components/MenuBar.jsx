import { FaBars, FaFire } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function MenuBar() {
  const navigate = useNavigate();
  return (
    <nav className="menu-bar">

      {/* <div className="browse-btn">
        <FaBars />
        <span>Browse Categories</span>
      </div> */}

      <div className="menu-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/deals">
          Deals <span className="hot-badge">Hot</span>
        </NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>

      <div
  className="deal-btn"
  onClick={() => navigate("/deals")}
>
  <FaFire />
  <span>Today's Deals</span>
</div>

    </nav>
  );
}

export default MenuBar;