import { Link } from "react-router-dom";

function OurWork() {
  return (
    <>
      <div className="work-container">
        <div className="work-header-container">
          <div className="work-header-1">
            <h3>WHAT WE DO</h3>
          </div>

          <div>
            <h1 className="work-header-2">Check Our Work</h1>
          </div>
        </div>

        <div className="work-cards-container">
          <div className="work-cards">
            <div className="image-container">
              <img
                src="/Images/bdaycake.jpg"
                alt="Birthday Cake"
                className="product-img"
              />
            </div>
            <div className="cake-description">
              <div>
                <h1 className="card-header cake-header">Birthday Cake</h1>
              </div>

              <div>
                <p className="card-p cake-p">
                  Custom designs for birthdays and celebrations.
                </p>
              </div>
            </div>
          </div>
          <div className="work-cards">
            <div className="image-container">
              <img
                src="/Images/graduationcake.jpg"
                alt="Graduation Cake"
                className="product-img"
              />
            </div>
            <div className="cake-description">
              <div>
                <h1 className="card-header cake-header">Graduation Cake</h1>
              </div>

              <div>
                <p className="card-p cake-p">
                  Elegant cakes made for graduation milestones.
                </p>
              </div>
            </div>
          </div>

          <div className="work-cards">
            <div className="image-container">
              <img
                src="/Images/mothersdaycake.jpg"
                alt="Mothers Day Cake"
                className="product-img"
              />
            </div>
            <div className="cake-description">
              <div>
                <h1 className="card-header cake-header">Mothers Day Cake</h1>
              </div>

              <div>
                <p className="card-p cake-p">
                  Sweet and thoughtful cakes for Mother’s Day celebrations.
                </p>
              </div>
            </div>
          </div>

          <div className="work-cards">
            <div className="image-container">
              <img
                src="/Images/weddingcake.jpg"
                alt="Wedding Cake"
                className="product-img"
              />
            </div>
            <div className="cake-description">
              <div>
                <h1 className="card-header cake-header">Wedding Cake</h1>
              </div>

              <div>
                <p className="card-p cake-p">
                  Beautiful wedding cakes crafted with elegance and style.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/products" className="view-all-button">
            View All
          </Link>
        </div>
      </div>
    </>
  );
}

export default OurWork;
