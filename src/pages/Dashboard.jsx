import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import axios from "axios";
const API = "https://shelflife-5ob7.onrender.com";
import {
  FaHome,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaUser,
  FaSignOutAlt,
  FaShoppingBag,
  FaArrowRight,
  FaTruck,
  FaLeaf,
  FaUndo,
  FaShieldAlt,
  FaWallet,
  FaClock,
  FaEdit,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
  try {

    const token = localStorage.getItem("token");

    const res = await axios.get(
  `${API}/api/orders`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

    setOrders(res.data);

  } catch (err) {

    console.log(err);

  }
};

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (item) => item.status === "Pending"
  ).length;

  const totalSpent = orders.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  return (
    <>
      <Navbar />
      <MenuBar />

      <div className="dashboard-container">

        {/* Sidebar */}

        <aside className="dashboard-sidebar">

          <div className="profile-box">

            <div className="profile-avatar">

              {user?.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}

            </div>

            <h3>{user?.name || "User"}</h3>

            <p>{user?.email}</p>

          </div>

          <Link
            to="/dashboard"
            className="sidebar-item active"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/orders"
            className="sidebar-item"
          >
            <FaBoxOpen />
            My Orders
          </Link>

          <Link
            to="/addresses"
            className="sidebar-item"
          >
            <FaMapMarkerAlt />
            Addresses
          </Link>

          <Link
            to="/profile"
            className="sidebar-item"
          >
            <FaUser />
            Profile
          </Link>

          <button
            className="logout-btn"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            <FaSignOutAlt />
            Logout
          </button>

        </aside>

        {/* Main */}

        <main className="dashboard-main">
          {/* ===========================
    HERO SECTION
=========================== */}

<div className="dashboard-hero">

  <div className="hero-left">

    <span className="welcome-tag">
      👋 Welcome Back
    </span>

    <h1>
      Hello, {user?.name || "User"}!
    </h1>

    <p>
      Manage your orders, addresses and profile
      from one place.
    </p>

    <div className="hero-buttons">

      <button
        className="hero-btn primary"
        onClick={() => navigate("/shop")}
      >
        Continue Shopping
      </button>

      <button
        className="hero-btn secondary"
        onClick={() => navigate("/orders")}
      >
        My Orders
      </button>

    </div>

  </div>

  <div className="hero-right">

    <img
      src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
      alt="grocery"
    />

  </div>

</div>

{/* ===========================
    STATS
=========================== */}

<div className="stats-grid">

  <div className="stat-card">

    <div className="stat-icon green">
      <FaShoppingBag />
    </div>

    <div>

      <h2>{totalOrders}</h2>

      <p>Total Orders</p>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon orange">
      <FaClock />
    </div>

    <div>

      <h2>{pendingOrders}</h2>

      <p>Pending Orders</p>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon blue">
      <FaMapMarkerAlt />
    </div>

    <div>

      <h2>2</h2>

      <p>Saved Addresses</p>

    </div>

  </div>

  <div className="stat-card">

    <div className="stat-icon purple">
      <FaWallet />
    </div>

    <div>

      <h2>₹{totalSpent}</h2>

      <p>Total Spent</p>

    </div>

  </div>

</div>

{/* ===========================
    QUICK ACTIONS
=========================== */}

<div className="quick-actions">

  <button
    onClick={() => navigate("/shop")}
  >
    🛒 Shop Now
  </button>

  <button
    onClick={() => navigate("/orders")}
  >
    📦 Track Orders
  </button>

  <button
    onClick={() => navigate("/profile")}
  >
    <FaEdit />
    Edit Profile
  </button>

  <button
    onClick={() => navigate("/addresses")}
  >
    📍 Manage Address
  </button>

</div>
{/* ===========================
    RECENT ORDERS
=========================== */}

<div className="recent-section">

  <div className="section-header">

    <h2>Recent Orders</h2>

    <Link
      to="/orders"
      className="view-all"
    >
      View All
      <FaArrowRight />
    </Link>

  </div>

  {orders.length > 0 ? (

    orders.slice(0,3).map((order)=>(

      <div
        className="recent-card"
        key={order._id}
      >

        <div className="recent-left">

          <div className="recent-icon">

            <FaBoxOpen />

          </div>

          <div>

            <h4>

              Order #
              {order._id.slice(-6).toUpperCase()}

            </h4>

            <p>

              {new Date(
                order.createdAt
              ).toLocaleDateString()}

            </p>

          </div>

        </div>

        <div className="recent-middle">

          <p>

            {order.products.length}
            {" "}
            Items

          </p>

          <strong>

            ₹{order.totalPrice}

          </strong>

        </div>

        <span
          className={`status ${order.status.toLowerCase()}`}
        >

          {order.status}

        </span>

      </div>

    ))

  ) : (

    <div className="empty-orders">

      <h3>No Orders Yet 🛒</h3>

      <p>

        Start shopping to see your
        recent orders here.

      </p>

      <button
        onClick={() => navigate("/shop")}
      >

        Continue Shopping

      </button>

    </div>

  )}

</div>

{/* ===========================
      FEATURES
=========================== */}

<div className="dashboard-features">

  <div className="feature-box">

    <FaTruck />

    <div>

      <h4>Fast Delivery</h4>

      <p>Delivered in minutes.</p>

    </div>

  </div>

  <div className="feature-box">

    <FaLeaf />

    <div>

      <h4>Fresh Products</h4>

      <p>100% quality checked.</p>

    </div>

  </div>

  <div className="feature-box">

    <FaUndo />

    <div>

      <h4>Easy Returns</h4>

      <p>Simple return process.</p>

    </div>

  </div>

  <div className="feature-box">

    <FaShieldAlt />

    <div>

      <h4>Secure Payments</h4>

      <p>Protected transactions.</p>

    </div>

  </div>

</div>

</main>

</div>

</>

);

}

export default Dashboard;