import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // Handles both "₹120" and 120
  const getPrice = (item) => {
  const price = item.price ?? item.newPrice ?? 0;

  if (typeof price === "number") {
    return price;
  }

  return Number(String(price).replace("₹", ""));
};
  const subtotal = cartItems.reduce(
  (total, item) => total + getPrice(item) * item.quantity,
  0
);

  const delivery = 20;
  const discount = 20;
  const total = subtotal + delivery - discount;

  return (
    <>
      <Navbar />
      <MenuBar />

      <div className="cart-container">
        <div className="cart-table">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span>Action</span>
          </div>

          {cartItems.length === 0 ? (
            <h3>Your Cart Is Empty 🛒</h3>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-row" key={index}>
                <div className="product-info-cart">
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="cart-img"
                    width="70"
                  />

                  <p>{item.title || item.name}</p>
                </div>

                <span>₹{getPrice(item)}</span>

                <div className="qty-box">
                  <button onClick={() => decreaseQuantity(index)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(index)}>
                    +
                  </button>
                </div>

                <span>
                  ₹{getPrice(item) * item.quantity}
                </span>

                <FaTrash
                  className="delete-icon"
                  onClick={() => removeFromCart(index)}
                />
              </div>
            ))
          )}
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>

          <button
            className="continue-btn"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>₹{delivery}</span>
          </div>

          

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;