import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
  try {

    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:5001/api/orders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setOrders(res.data);

  } catch (error) {

    console.log(error);

  }
};

  return (
    <>
  <Navbar />
  <MenuBar />

  <div className="orders-page">

    {/* Header */}

    <div className="orders-header">

      <div>
        <h1>📦 My Orders</h1>
        <p>Track all your recent grocery orders</p>
      </div>

      <div className="orders-count">
        <h2>{orders.length}</h2>
        <span>Total Orders</span>
      </div>

    </div>

    {/* Orders */}

    {orders.length > 0 ? (

      orders.map((order) => (

        <div
          className="order-card"
          key={order._id}
        >

          {/* LEFT */}

          <div className="order-left">

            <div className="order-images">

              {order.products
                .slice(0, 3)
                .map((product, index) => (

                  <img
                    key={index}
                    src={product.image}
                    alt={product.title}
                  />

              ))}

              {order.products.length > 3 && (

                <div className="more-products">

                  +{order.products.length - 3}

                </div>

              )}

            </div>

            <div className="order-info">

              <h3>

                Order #

                {order._id
                  .slice(-6)
                  .toUpperCase()}

              </h3>

              <p>

                {new Date(
                  order.createdAt
                ).toLocaleDateString("en-IN")}

              </p>

              <span>

                {order.products.length}

                {" "}Items

              </span>

            </div>

          </div>

          {/* RIGHT */}

          <div className="order-right">

            <div className="price-box">

              ₹{order.totalPrice}

            </div>

            <div className="payment-box">

              {order.paymentMethod}

            </div>

            <span
              className={`status-badge ${order.status.toLowerCase()}`}
            >
              {order.status}
            </span>

            <button className="view-btn">

              View Details →

            </button>

          </div>

        </div>

      ))

    ) : (

      <div className="empty-orders">

        <h2>No Orders Yet 🛒</h2>

        <p>

          Start shopping to see your orders here.

        </p>

      </div>

    )}

  </div>
</>
  );
}

export default Orders;