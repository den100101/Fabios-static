import { useState } from "react";
import Cakes from "../cakes";
import Cupcakes from "./cupcakes";
import Loaves from "./loaves";

function Modal({ ModalClose }) {
  const [render, setRender] = useState("Cakes");
  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-title">
            <div className="m-title">
              <h1>Products</h1>
            </div>
            <div>
              <button
                onClick={() => ModalClose(false)}
                className="modal-button"
              >
                X
              </button>
            </div>
          </div>
          <div className="modal-content">
            <div className="modal-nav">
              <ul>
                <li onClick={() => setRender("Cakes")} className="product-nav">
                  Cakes
                </li>
                <li
                  onClick={() => setRender("Cupcakes")}
                  className="product-nav"
                >
                  Cupcakes
                </li>
                <li onClick={() => setRender("Loaves")} className="product-nav">
                  Loaves
                </li>
              </ul>
            </div>
            {(render === "Cakes" && <Cakes />) ||
              (render === "Cupcakes" && <Cupcakes />) ||
              (render === "Loaves" && <Loaves />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
