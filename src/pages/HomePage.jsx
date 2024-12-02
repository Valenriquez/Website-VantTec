import { Navbar, Hero, About, Projects, Research, Awards, Sponsors } from "../components"

const HomePage = () => {
  return (
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
  )
}

export default HomePage