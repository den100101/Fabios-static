import { useState } from "react";
import Navigation from "./components/nav";
import Footer from "./components/footer";
import Modal from "./components/modal";
import ModalCupcakes from "./components/modalcc";

const cakes = Array.from(
  { length: 6 },
  (_, i) => `Images/cakes/img${i + 1}.jpg`,
);

const cupcakes = Array.from(
  { length: 6 },
  (_, i) => `Images/cupcakes/ccimg${i + 1}.jpg`,
);

function Products() {
  const [modalType, setModalType] = useState(null);
  return (
    <>
      <Navigation />
      <div className="product-container">
        <div className="product-blur">
          <div className="product-container-desc">
            <div className="product-header">
              <h1>Our Works</h1>
            </div>
            <div className="product-p">
              <p>
                From your imagination to our bakery, we work together with you
                to create delicious customized cakes designed with love,
                creativity, and attention to every detail made especially for
                your celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="product-title">
          <h1>Our Products</h1>
          <h2>Handcrafted Customized Cakes for Every Celebration</h2>
        </div>
        <div className="product-card-container">
          <div className="card-cake">
            <div className="cake-grid-container">
              {cakes.map((cake, i) => (
                <div key={i}>
                  {" "}
                  <img
                    src={cake}
                    alt="cake"
                    className="cake-img"
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="grid-button">
                <button
                  className="view-button"
                  onClick={() => {
                    setModalType("cakes");
                  }}
                >
                  View all cakes
                </button>
              </div>
            </div>
          </div>
          <div className="card-cake">
            <div className="cupcake-grid-container">
              {cupcakes.map((cupcake, i) => (
                <div key={i}>
                  <img
                    src={cupcake}
                    alt="cupcake"
                    className="cupcake-img"
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="grid-button">
                <button
                  className="view-button"
                  onClick={() => {
                    setModalType("cupcakes");
                  }}
                >
                  View all cupcakes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {modalType === "cakes" && <Modal ModalClose={setModalType} />}

      {modalType === "cupcakes" && <ModalCupcakes ModalClose={setModalType} />}
    </>
  );
}

export default Products;
