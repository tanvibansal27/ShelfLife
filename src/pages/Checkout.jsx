import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
const API = "https://shelflife-5ob7.onrender.com";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMoneyBillWave,
  FaUniversity,
  FaCreditCard,
  FaLock,
  FaTag,
} from "react-icons/fa";

import { SiGooglepay } from "react-icons/si";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const delivery = subtotal >= 500 ? 0 : 20;

  const discount = 20;

  const totalPrice =
    subtotal + delivery - discount;

  const freeDeliveryTarget = 500;

  const remaining = Math.max(
    freeDeliveryTarget - subtotal,
    0
  );

  const progress = Math.min(
    (subtotal / freeDeliveryTarget) * 100,
    100
  );

  const placeOrder = async () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  if (
    !fullName ||
    !address ||
    !city ||
    !state ||
    !pincode ||
    !phone
  ) {
    alert("Please fill all details.");
    return;
  }

  try {
    const token = localStorage.getItem("token");

    await axios.post(
  `${API}/api/orders`,
      {
        products: cartItems.map((item) => ({
          productId: item._id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),

        address:
          address +
          ", " +
          city +
          ", " +
          state +
          " - " +
          pincode,

        phone,

        paymentMethod,

        totalPrice,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);

    navigate("/orders");

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message ||
      "Failed to place order"
    );

  }
};
  return (
    <>
      <Navbar />
      <MenuBar />
            <div className="checkout-container">

        {/* LEFT PANEL */}

        <div className="checkout-form">

          <div className="checkout-title">
            <div>
              <h2>Checkout</h2>
              <p>Complete your order securely</p>
            </div>

            <span>
              <FaLock />
              100% Secure
            </span>
          </div>

          {/* ADDRESS */}

          <div className="checkout-section">

            <h3>
              <FaMapMarkerAlt />
              Delivery Address
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="House / Flat / Building"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            />

            <div className="three-inputs">

              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) =>
                  setCity(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) =>
                  setState(e.target.value)
                }
              />

              <input
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) =>
                  setPincode(e.target.value)
                }
              />

            </div>

          </div>

          {/* CONTACT */}

          <div className="checkout-section">

            <h3>
              <FaPhone />
              Contact Details
            </h3>

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

          </div>

          {/* PAYMENT */}

          <div className="checkout-section">

            <h3>
              <FaMoneyBillWave />
              Payment Method
            </h3>

            <div className="payment-grid">

              <div
                className={`payment-card ${
                  paymentMethod ===
                  "Cash on Delivery"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod(
                    "Cash on Delivery"
                  )
                }
              >
                <FaMoneyBillWave />
                <span>Cash on Delivery</span>
              </div>

              <div
                className={`payment-card ${
                  paymentMethod === "UPI"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod("UPI")
                }
              >
                <SiGooglepay />
                <span>UPI Payment</span>
              </div>

              <div
                className={`payment-card ${
                  paymentMethod === "Card"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod("Card")
                }
              >
                <FaCreditCard />
                <span>Credit / Debit Card</span>
              </div>

              <div
                className={`payment-card ${
                  paymentMethod ===
                  "Net Banking"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod(
                    "Net Banking"
                  )
                }
              >
                <FaUniversity />
                <span>Net Banking</span>
              </div>

            </div>

          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            <FaLock />
            Place Order Securely
          </button>

        </div>

        {/* RIGHT PANEL */}

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          <div className="delivery-box">

            {remaining > 0 ? (
              <>
                🚚 Add
                <strong> ₹{remaining} </strong>
                more to unlock
                <strong> FREE Delivery</strong>
              </>
            ) : (
              <>
                🎉 Congratulations!
                <strong> Free Delivery</strong>
                unlocked.
              </>
            )}
            <h2>Order Summary</h2>

<button
  className="continue-shopping-btn"
  onClick={() => navigate("/shop")}
>
  ← Continue Shopping
</button>

<div className="delivery-box"></div>
            <div className="progress-bar">
              <span
                style={{
                  width: `${progress}%`,
                }}
              ></span>
            </div>

          </div>

          {cartItems.length === 0 ? (

            <div className="empty-summary">

              <h3>Your cart is empty 🛒</h3>

            </div>

          ) : (

            cartItems.map((item) => (

              <div
                className="summary-product"
                key={item._id || item.title}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div>

                  <h4>{item.title}</h4>

                  <p>
                    Qty : {item.quantity}
                  </p>

                </div>

                <strong>
                  ₹
                  {item.price *
                    item.quantity}
                </strong>

              </div>

            ))

          )}

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
            <span>₹{totalPrice}</span>
          </div>


        </div>

      </div>

      <Footer />

    </>
  );
}

export default Checkout;