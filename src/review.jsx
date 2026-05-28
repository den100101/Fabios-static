import Navigation from "./components/nav";
import Footer from "./components/footer";

function Reviews() {
  return (
    <>
      <Navigation />
      <div className="review-container">
        <div className="review-header-container">
          <div className="review-header-1">
            <h1>Customer Reviews</h1>
          </div>
          <div className="review-header-2">
            <h1>Loved by Our Customer</h1>
          </div>
          <div className="review-header-p">
            <p>We're grateful for the love and trust customers give us</p>
            <p>
              From birthdays to weddings, we're honored to make every
              celebration sweeter with our customized cakes.
            </p>
          </div>
        </div>
        <div className="review-cards-container">
          <div className="review-cards">
            <div>
              <img src="/Images/5star-image.png" alt="" className="star-img" />
            </div>
            <div className="review-statement">
              "SUPER SARAP! Everyone loved the cake and cupcakes and how it
              tastes. Moist but not too sweet! Kudos! 👏"
            </div>
            <div className="review-person">Keigh G.</div>
            <div className="customer-order">Customized Birthday Cake</div>
          </div>
          <div className="review-cards">
            <div>
              <img src="/Images/5star-image.png" alt="" className="star-img" />
            </div>
            <div className="review-statement">
              "Must try! Masarap yung banana cake, not so sweet not unlike other
              banana cakes na sobrang moist s gitna. Eto sakto lng ung moist nia
              and ang generous ng toppings. 🥜 Pwede na panlaban sa Carmela’s
              Banana Cake. Hehe"
            </div>
            <div className="review-person">Ela M.</div>
            <div className="customer-order">Banana Cake</div>
          </div>
          <div className="review-cards">
            <div>
              <img src="/Images/5star-image.png" alt="" className="star-img" />
            </div>
            <div className="review-statement">
              "wow heaven po sa sarap...sulit ang lasa,price,packaging,,, sarap
              na uulit ulitin... mpapa softdrinks ka or coffee ,, superb!!"
            </div>
            <div className="review-person">Josie S.</div>
            <div className="customer-order">Banana Cake</div>
          </div>
          <div className="review-cards">
            <div>
              <img src="/Images/5star-image.png" alt="" className="star-img" />
            </div>
            <div className="review-statement">
              "SUPER SARAP!!! 💕 ordered choco chip and overload and ubos agad
              in 1 day 😂 the choco chip tastes similar to Lawson’s banana choco
              bread (which we love haha) while the overload is good for the nut
              lovers. And the taste gets better pa when refrigerated. Highly
              recommend you guys to try ❤️"
            </div>
            <div className="review-person">Mela R.</div>
            <div className="customer-order">Banana Cake</div>
          </div>
          <div className="review-cards">
            <div>
              <img src="/Images/5star-image.png" alt="" className="star-img" />
            </div>
            <div className="review-statement">
              "I was once a baker too and I can say that this banana cake is a
              bang for the buck. The right amount of sweetness with the not
              tinipid na banana will surely fill your mouth. One slice is not
              enough, I ended up eating half of the loaf in one seating and
              saying sorry to my hubby.😆 Go ahead and order, you will not
              regret it! P.S. The baker is easy to talk to, they have a long
              list of orders but they were able to squeeze mine on the date
              requested since my second set of order was for a gift. THANK YOU
              Fabio's.🤎"
            </div>
            <div className="review-person">Ariane A.</div>
            <div className="customer-order">Banana Cake</div>
          </div>
          <div className="review-cards">
            <div>
              <img src="/Images/5star-image.png" alt="" className="star-img" />
            </div>
            <div className="review-statement">
              "sulit bayad at syempre nasa tamang price. order na guys salamat
              ❤️"
            </div>
            <div className="review-person">John Kevin A.</div>
            <div className="customer-order">Banana Cake</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reviews;
