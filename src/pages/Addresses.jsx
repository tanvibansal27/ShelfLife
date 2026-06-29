import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
const API = "https://shelflife-5ob7.onrender.com";
import {
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Addresses() {
  const [addresses, setAddresses] = useState([]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    house: "",
    city: "",
    state: "",
    pincode: "",
    addressType: "Home",
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const res = await axios.get(
  `${API}/api/addresses`
);
      setAddresses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addAddress = async () => {
    try {
      await axios.post(
  `${API}/api/addresses`,
  form
);

      fetchAddresses();

      setShowForm(false);

      setForm({
        name: "",
        phone: "",
        house: "",
        city: "",
        state: "",
        pincode: "",
        addressType: "Home",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAddress = async (id) => {
    if (!window.confirm("Delete Address?")) return;

    try {
      await axios.delete(
  `${API}/api/addresses/${id}`
);
      fetchAddresses();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <MenuBar />

      <div className="addresses-page">

        <div className="addresses-header">

          <div>

            <h1>My Addresses</h1>

            <p>Manage your delivery locations</p>

          </div>

          <button
            className="add-address-btn"
            onClick={() => setShowForm(!showForm)}
          >
            <FaPlus /> Add Address
          </button>

        </div>

        {showForm && (
          <div className="address-form">

            <input
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              placeholder="House / Street"
              name="house"
              value={form.house}
              onChange={handleChange}
            />

            <input
              placeholder="City"
              name="city"
              value={form.city}
              onChange={handleChange}
            />

            <input
              placeholder="State"
              name="state"
              value={form.state}
              onChange={handleChange}
            />

            <input
              placeholder="Pincode"
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
            />

            <select
              name="addressType"
              value={form.addressType}
              onChange={handleChange}
            >
              <option>Home</option>
              <option>Office</option>
              <option>Hostel</option>
              <option>Other</option>
            </select>

            <button
              className="save-address-btn"
              onClick={addAddress}
            >
              Save Address
            </button>

          </div>
        )}

        <div className="addresses-grid">

          {addresses.map((address) => (

            <div
              className="address-box"
              key={address._id}
            >

              <div className="address-header">

                <div className="address-type">

                  {address.addressType === "Office" ? (
                    <FaBuilding />
                  ) : (
                    <FaHome />
                  )}

                  <span>
                    {address.addressType}
                  </span>

                </div>

                {address.isDefault && (
                  <span className="default-badge">
                    Default
                  </span>
                )}

              </div>

              <h3>{address.name}</h3>

              <p>

                <FaMapMarkerAlt />

                {" "}

                {address.house},

                {address.city},

                {address.state}

                -

                {address.pincode}

              </p>

              <p>

                <FaPhoneAlt />

                {" "}

                {address.phone}

              </p>

              <div className="address-actions">

                <button className="edit-btn">

                  <FaEdit />

                  Edit

                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteAddress(address._id)
                  }
                >
                  <FaTrash />

                  Delete

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Addresses;