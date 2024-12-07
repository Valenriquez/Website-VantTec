import { Navbar, SwipeCards, Vision, Mision, History } from "../components";

const AboutPage = () => {
  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <SwipeCards />
        </div>
        <Vision />
        <Mision />
        <History />
    </div>
  )
}

export default AboutPage