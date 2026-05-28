import { useState } from "react";
function Modal({ setCloseModal }) {
  return (
    <>
      <div className="modal-background">
        <div className="contact-modal-container">
          <div className="contact-modal-header">
            <h1>You can contact us here</h1>
          </div>
          <div className="modal-content">
            <div className="contents">
              <div>
                <img
                  src="/Images/facebook-tertiary.png"
                  alt=""
                  className="modal-logo"
                />
              </div>
              <div>
                <p>
                  <a
                    href="https://www.facebook.com/fabios.bananacake"
                    className="link-p"
                    target="blank"
                  >
                    Fabio's
                  </a>
                </p>
              </div>
            </div>
            <div className="contents">
              <div>
                <img
                  src="/Images/instagram-tertiary.png"
                  alt=""
                  className="modal-logo"
                />
              </div>
              <div>
                <p>
                  <a
                    href="https://www.instagram.com/fabios.cakesandpastries/"
                    className="link-p"
                    target="blank"
                  >
                    fabios.cakesandpastries
                  </a>
                </p>
              </div>
            </div>
            <div className="contents">
              <div>
                <img
                  src="/Images/telephone-tertiary.png"
                  alt=""
                  className="modal-logo"
                />
              </div>
              <div>
                <p className="link-p">0917 775 1213</p>
              </div>
            </div>
          </div>
          <div className="close-button" onClick={() => setCloseModal(false)}>
            close
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
