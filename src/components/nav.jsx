import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./contactmodal";

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="nav-container">
      <img
        src="/Images/burger-bar.png"
        alt=""
        className="burger"
        onClick={() => setNavOpen(!navOpen)}
      />

      <img src="/Images/logo.png" alt="" className="logo" />

      <div className="desktop-nav">
        <ul>
          <li>
            <Link to="/" onClick={() => setNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/products">Our Products</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <div className="nav-button">
        <button
          className="message-us-button"
          onClick={() => setOpenModal(true)}
        >
          Message Us
        </button>
      </div>

      <div className={`mobile-nav ${navOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/products">Our Products</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      {openModal && <Modal setCloseModal={setOpenModal} />}
    </nav>
  );
}

export default Navigation;
