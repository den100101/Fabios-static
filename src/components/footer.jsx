import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="first-footer-section">
          <div className="f-logo">
            <img
              src="/Images/logo-tertiary.png"
              alt=""
              className="footer-logo"
            />
          </div>
          <div className="footer-statement">
            <h1>
              Crafted with love, baked with passion. making every celebration
              sweeter with Fabio’s Cakes.
            </h1>
          </div>
          <div className="footer-socials">
            <div>
              <a
                href="https://www.facebook.com/fabios.bananacake"
                target="blank"
              >
                <img
                  src="/Images/facebook-tertiary.png"
                  alt=""
                  className="social-logos"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/fabios.cakesandpastries/"
                target="blank"
              >
                <img
                  src="/Images/instagram-tertiary.png"
                  alt=""
                  className="social-logos"
                />
              </a>
            </div>
            <div>
              <img
                src="/Images/telephone-tertiary.png"
                alt=""
                className="social-logos"
              />
            </div>
          </div>
        </div>
        <div className="footer-quick-link">
          <h1>Quick Links</h1>
          <ul>
            <li>
              <Link to="/" className="footer-a">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-a">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="footer-a">
                Products
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="footer-a">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div className="contacts-section">
          <div className="contact-section-header">Contacts</div>
          <div className="contacts">
            <div>
              <img
                src="/Images/telephone-tertiary.png"
                alt=""
                className="contacts-logo"
              />
            </div>
            <div>
              <p>0917 775 1213</p>
            </div>
          </div>
          <div className="contacts">
            <div>
              <img
                src="/Images/instagram-tertiary.png"
                alt=""
                className="contacts-logo"
              />
            </div>
            <div>
              <p className="link">
                <a
                  href="https://www.instagram.com/fabios.cakesandpastries/"
                  target="blank"
                  className="footer-a"
                >
                  fabios.cakesandpastries
                </a>
              </p>
            </div>
          </div>
          <div className="contacts">
            <div>
              <img
                src="/Images/location-tertiary.png"
                alt=""
                className="contacts-logo"
              />
            </div>
            <div>
              <p>
                <a
                  href="https://maps.app.goo.gl/1aKFf3796Txjhowe7"
                  target="blank"
                  className="footer-a"
                >
                  Pioneer Street Mandaluyong , Mandaluyong, Philippines, 1550
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reserve">
        &copy; Fabio's cake and pastries. All Rights Reserve
      </div>
    </>
  );
}

export default Footer;
