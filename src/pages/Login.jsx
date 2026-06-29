import axios from "axios";
import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaShoppingBasket,
  FaLeaf,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  // Login States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ---------------- LOGIN ----------------

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      login(res.data.user, res.data.token);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  // ---------------- REGISTER ----------------

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      login(res.data.user, res.data.token);

      if (res.data.token) {
        localStorage.setItem(
          "token",
          res.data.token
        );
      }

      alert("Registration Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <>
      <Navbar />
      <MenuBar />

      <div className="auth-page">

        {/* Left Side */}

        <div className="auth-left">

  <span className="auth-badge">
    🌿 Fresh • Fast • Reliable
  </span>

  <h1>
    Welcome to
    <br />
    <span>ShelfLife</span>
  </h1>

  <p>
    Your one-stop destination for fresh groceries
    delivered to your doorstep in minutes.
  </p>

  <img
    src="/basket.png"
    alt="Basket"
    className="hero-basket"
  />

  <div className="left-features">

    <div className="left-feature">
      <div className="circle">🌿</div>
      <h4>100%</h4>
      <p>Fresh Products</p>
    </div>

    <div className="left-feature">
      <div className="circle">🚚</div>
      <h4>10 Min</h4>
      <p>Fast Delivery</p>
    </div>

    <div className="left-feature">
      <div className="circle">🛡️</div>
      <h4>Secure</h4>
      <p>Payments</p>
    </div>

    <div className="left-feature">
      <div className="circle">⭐</div>
      <h4>Best</h4>
      <p>Quality</p>
    </div>

  </div>

  <div className="offer-box">
    🎁 Exciting offers & discounts every day!
  </div>

</div>
        {/* Right Side */}

        <div className="auth-right">

          {/* Login */}

          <div className="auth-card">

            <h2>Login</h2>

            <p>
              Login to continue shopping.
            </p>

            <div className="input-box">

              <FaEnvelope />

              <input
                type="email"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) =>
                  setLoginEmail(e.target.value)
                }
              />

            </div>

            <div className="input-box">

              <FaLock />

              <input
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) =>
                  setLoginPassword(
                    e.target.value
                  )
                }
              />

            </div>

            <button
              className="auth-btn"
              onClick={handleLogin}
            >
              Login
            </button>

            <p className="forgot">
              Forgot Password?
            </p>

          </div>

          {/* Register */}

          <div className="auth-card">

            <h2>Create Account</h2>

            <p>
              Join ShelfLife today.
            </p>

            <div className="input-box">

              <FaUser />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>

            <div className="input-box">

              <FaEnvelope />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            <div className="input-box">

              <FaLock />

              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

            </div>

            <button
              className="auth-btn"
              onClick={handleRegister}
            >
              Register
            </button>

            <p className="already">
              Already have an account?
              <span> Login</span>
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Login;