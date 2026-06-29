import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaLeaf,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />
      <MenuBar />

      <section className="contact-hero">

        {/* LEFT */}

        <div className="contact-left">

          <span className="contact-tag">
            <FaLeaf />
            Get in Touch
          </span>

          <h1>
            Contact <br />
            ShelfLife
          </h1>

          <p>
            We'd love to hear from you! Whether you have a
            question about orders, products, delivery or
            feedback, our team is always ready to help.
          </p>

          <div className="contact-divider">
            <span></span>
            <FaLeaf />
            <span></span>
          </div>

          <div className="contact-card">

            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Address</h3>
              <p>Ajmer, Rajasthan, India</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="icon-box">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="icon-box">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>support@shelflife.com</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="icon-box">
              <FaClock />
            </div>

            <div>
              <h3>Support Hours</h3>
              <p>Mon - Sat : 9 AM - 8 PM</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-form-box">

          <div className="form-header">

            <div className="form-icon">
              <FaEnvelope />
            </div>

            <div>
              <h2>Send us a Message</h2>

              <p>
                We're here to help and answer any question
                you might have.
              </p>
            </div>

          </div>

          <div className="row">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button className="send-btn">

            <FaPaperPlane />

            Send Message

          </button>

          <div className="privacy-text">

            🔒 Your information is safe with us. We never
            share your data.

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;