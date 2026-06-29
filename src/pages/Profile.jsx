import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <MenuBar />

      <div className="profile-page">

        <div className="simple-profile-card">

          {/* Header */}

          <div className="profile-top">

            <div className="profile-avatar">
              <FaUserCircle />
            </div>

            <h1>
              {user?.name || "Guest User"}
            </h1>

            <div className="verified">
              <FaCheckCircle />
              Verified Account
            </div>

          </div>

          {/* Details */}

          <div className="profile-details">

            <div className="detail-item">

              <FaUserCircle />

              <div>
                <span>Full Name</span>

                <h4>
                  {user?.name || "Not Available"}
                </h4>
              </div>

            </div>

            <div className="detail-item">

              <FaEnvelope />

              <div>
                <span>Email Address</span>

                <h4>
                  {user?.email || "Not Available"}
                </h4>
              </div>

            </div>

            <div className="detail-item">

              <FaPhoneAlt />

              <div>
                <span>Phone Number</span>

                <h4>
                  {user?.phone || "Not Added"}
                </h4>
              </div>

            </div>

            <div className="detail-item">

              <FaCalendarAlt />

              <div>
                <span>Member Since</span>

                <h4>
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "Recently Joined"}
                </h4>
              </div>

            </div>

            <div className="detail-item">

              <FaMapMarkerAlt />

              <div>
                <span>Default Address</span>

                <h4>
                  {user?.address || "No Address Added"}
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;