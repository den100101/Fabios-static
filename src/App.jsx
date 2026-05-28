import { Routes, Route } from "react-router-dom";
import Navigation from "./components/nav";
import Hero from "./components/hero";
import Feature from "./components/feature";
import OurWork from "./components/work";
import Footer from "./components/footer";
import About from "./About";
import Products from "./Products";
import Reviews from "./review";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Hero />
              <Feature />
              <OurWork />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;
