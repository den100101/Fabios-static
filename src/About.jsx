import Navigation from "./components/nav";
import Footer from "./components/footer";

function About() {
  return (
    <>
      <Navigation />
      <div className="about-container">
        <div className="about-blur-background">
          <div className="about-description">
            <div>
              <h1 className="about-sub-header">ABOUT US</h1>
            </div>
            <div>
              <h1 className="about-main-header">
                Baked with Love, Made for You
              </h1>
            </div>
            <div>
              <p className="about-p">
                At Fabio's, every customized cake is crafted to bring your
                vision to life. What began as a passion for baking has grown
                into a creative space where every design is made with care,
                detail, and a personal touch.
              </p>
            </div>
            <div>
              <p className="about-p">
                We believe customized cakes are more than just desserts. they
                are unique expressions of love, celebration, and unforgettable
                moments made specially for you.
              </p>
            </div>
          </div>
        </div>
        <div className="about-feature-container">
          <div className="about-feature-image">
            <img
              src="/Images/bananacake2.jpg"
              alt=""
              className="feature-about-img"
            />
          </div>
          <div>
            <div className="about-feature-description">
              <div className="about-feature-header">
                <h1>Our Story</h1>
              </div>
              <div className="about-feature-statement">
                <p>
                  Fabio's Cake and Pastries is a small pastry business
                  established on November 25, 2020, and owned by Trish Loto
                  Mendez together with Chino Mendez. The business started by
                  selling banana loaves and eventually expanded its products by
                  offering customized cakes after one year of operation. Today,
                  Fabio’s Cake and Pastries specializes in customized cakes that
                  are designed according to the preferences of customers.
                </p>
              </div>
            </div>
          </div>
          <div className="about-feature-image">
            <img
              src="/Images/heropic.jpg"
              alt=""
              className="feature-about-img"
            />
          </div>
        </div>
        <div className="feature-card">
          <div className="about-cards-section">
            <div>
              <img
                src="/Images/wedding-cake.png"
                alt=""
                className="about-logo"
              />
            </div>
            <div className="cards-description">
              <div>5</div>
              <div>Years of Experience</div>
            </div>
          </div>
          <div className="about-cards-section">
            <div>
              <img src="/Images/happiness.png" alt="" className="about-logo" />
            </div>
            <div className="cards-description">
              <div>500+</div>
              <div>Happy Customers</div>
            </div>
          </div>
          <div className="about-cards-section">
            <div>
              <img
                src="/Images/wedding-cake (1).png"
                alt=""
                className="about-logo"
              />
            </div>
            <div className="cards-description">
              <div>500+</div>
              <div>Custom Cakes</div>
            </div>
          </div>
          <div className="about-cards-section">
            <div>
              <img src="/Images/charity.png" alt="" className="about-logo" />
            </div>
            <div className="cards-description">
              <div>100%</div>
              <div>Made with Love</div>
            </div>
          </div>
        </div>

        {/* last section */}
        <div className="feature-card2">
          <div className="about-cards-section">
            <div>
              <img src="/Images/whisk.png" alt="" className="about-logo2" />
            </div>
            <div className="cards-description2">
              <div>
                <h1>Quality Ingredients</h1>
              </div>
              <div>
                <p>We use only the finest and freshest ingredients</p>
              </div>
            </div>
          </div>
          <div className="about-cards-section">
            <div>
              <img src="/Images/pie.png" alt="" className="about-logo2" />
            </div>
            <div className="cards-description2">
              <div>
                <h1>Made with love</h1>
              </div>
              <div>
                <p>Every cake is baked with passion and care</p>
              </div>
            </div>
          </div>
          <div className="about-cards-section">
            <div>
              <img src="/Images/cake.png" alt="" className="about-logo2" />
            </div>
            <div className="cards-description2">
              <div>
                <h1>Beautifully crafted</h1>
              </div>
              <div>
                <p>Designed to look as amazing as they taste</p>
              </div>
            </div>
          </div>
          <div className="about-cards-section">
            <div>
              <img src="/Images/delivery.png" alt="" className="about-logo2" />
            </div>
            <div className="cards-description2">
              <div>
                <h1>One-Time Delivery</h1>
              </div>
              <div>
                <p>We deliver happiness right on me</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
