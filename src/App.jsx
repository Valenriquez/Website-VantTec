import { Routes, Route } from "react-router-dom";

import { About, Projects, Hero, Navbar, Research, Awards, Sponsors, Footer } from "./components";
import BoatProject from "./projectsPage/BoatProject"; // Adjust path based on your folder structure
import DroneProject from "./projectsPage/DroneProject";
import SubmarineProject from "./projectsPage/SubmarineProject";
import SDVProject from "./projectsPage/SDVProject";

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
          path="/Boat"
          element={
            <div>
              <Navbar />
              <BoatProject />
              <Footer />
            </div>
          }
        />
        {/* Drone Project Route */}
        <Route
          path="/Drone"
          element={
            <div>
              <Navbar />
              <DroneProject />
              <Footer />
            </div>
          }
        />
        {/* Submarine Project Route */}
        <Route
          path="/Submarine"
          element={
            <div>
              <Navbar />
              <SubmarineProject />
              <Footer />
            </div>
          }
        />
        {/* SDV Project Route */}
        <Route
          path="/SDV"
          element={
            <div>
              <Navbar />
              <SDVProject />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
