function Feature() {
  return (
    <>
      <div className="feature-container">
        <div className="feature-header">
          <img
            src="/Images/logo-tertiary.png"
            alt=""
            className="feature-logo"
          />
        </div>
        <div>
          <h1 className="card-header black">
            custom cakes crafted with love, detail, and celebration in every
            bite.
          </h1>
        </div>
        <div className="cards-container">
          <div className="cards">
            <div>
              <img src="/Images/bake.png" alt="" className="cards-img" />
            </div>
            <div>
              <h1 className="card-header">Fresh Ingredients</h1>
            </div>
            <div>
              <p className="card-p">
                We use only the finest and freshest ingredients to create
                delicious cakes with quality you can taste in every bite.
              </p>
            </div>
          </div>
          <div className="cards">
            <div>
              <img src="/Images/whisk.png" alt="" className="cards-img" />
            </div>
            <div>
              <h1 className="card-header">Made with Love</h1>
            </div>
            <div>
              <p className="card-p">
                Every customized cake is carefully baked and designed with
                passion, creativity, and attention to every detail.
              </p>
            </div>
          </div>
          <div className="cards">
            <div>
              <img src="/Images/delivery.png" alt="" className="cards-img" />
            </div>
            <div>
              <h1 className="card-header">Fast & Safe Delivery</h1>
            </div>
            <div>
              <p className="card-p">
                Enjoy fresh and beautifully customized cakes delivered safely
                and on time right to your doorstep.
              </p>
            </div>
          </div>
          <div className="cards">
            <div>
              <img
                src="/Images/black-forest.png"
                alt=""
                className="cards-img"
              />
            </div>
            <div>
              <h1 className="card-header">Custom Cake Designs</h1>
            </div>
            <div>
              <p className="card-p">
                From elegant weddings to fun birthdays, we create personalized
                cake designs that match your perfect celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Feature;
