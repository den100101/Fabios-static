import { useState } from "react";
import Modal from "./contactmodal";

function Hero() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="hero-container">
        <div className="hero-blur-background">
          <div className="hero-description-container">
            <div className="hero-header">
              <h2>Made Just for You</h2>
            </div>
            <div className="hero-statement">
              <h1>Baked for Your Special Moments</h1>
            </div>
            <div className="hero-pharagraph">
              <p>
                Custom cakes designed to match your style, theme, and sweetest
                moments. From birthdays to weddings , we turn your ideas into
                delicious creations made with love.
              </p>
            </div>
            <div>
              <button className="hero-button" onClick={setOpenModal}>
                Message Us
              </button>
            </div>
          </div>
        </div>
        {openModal && <Modal setCloseModal={setOpenModal} />}
      </div>
    </>
  );
}

export default Hero;
