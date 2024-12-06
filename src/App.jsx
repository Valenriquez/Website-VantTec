import { Routes, Route } from "react-router-dom";

import { About, Projects, Hero, Navbar, Research, Awards, Sponsors, Footer } from "./components";
import BoatProject from "./projectsPage/BoatProject"; // Adjust path based on your folder structure


const App = () => {
  return (
    <div className="relative z-0 bg-black">
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Projects />
              <Research />
              <Awards />
              <Sponsors />
              <Footer />
            </div>
          }
        />
        {/* Boat Project Route */}
        <Route
          path="/boat-project"
          element={
            <div>
              <Navbar />
              <BoatProject />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
