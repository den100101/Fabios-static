import { useState } from "react";
import Navigation from "./components/nav";
import Footer from "./components/footer";
import Modal from "./components/modal";

const cakes = Array.from(
  { length: 6 },
  (_, i) => `Images/cakes/img${i + 1}.jpg`,
);

const cupcakes = Array.from(
  { length: 6 },
  (_, i) => `Images/cupcakes/ccimg${i + 1}.jpg`,
);

function Products() {
  const [openModal, setOpenmodal] = useState(false);
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
          <div className="product-grid-container">
            {cakes.map((cake) => (
              <img src={cake} alt="" className="cake-img" />
            ))}
            {cupcakes.map((cupcake) => (
              <img src={cupcake} alt="" className="cupcake-img" />
            ))}
          </div>
        </div>
        <button className="view-button" onClick={() => setOpenmodal(true)}>
          View All Products
        </button>
      </div>
      <Footer />
      {openModal && <Modal ModalClose={setOpenmodal} />}
    </>
  );
}

export default Products;
