import { BrowserRouter } from "react-router-dom";

import { About, Projects, Hero, Navbar, Research, Awards, Sponsors} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        <Research />
        <Awards />
        <Sponsors />
      </div>
    </BrowserRouter>
  );
}

export default App;