import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
import { styles } from "../styles";
import { DronesCanvas } from "./canvas";
import { arrow } from '../assets'
import { cardsData } from "../constants";
import { Slide, Fade } from "react-awesome-reveal";

const AnimatedCard = () => {
  const slideInVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 
    md:grid-cols-2 place-items-center gap-6">
      {cardsData.map(({ id, img, title, desc }) => {
        return (
          <motion.div key={id} initial="hidden" 
          animate="visible" variants={slideInVariant}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} 
              scale={1.05} transitionSpeed={450}>
                <div className="p-[1.5px] rounded-lg 
                  bg-gradient-to-r from-blue-500 
                via-indigo-500 to-cyan-500 shadow-md">
                  <div className="bg-tertiary rounded-lg 
                    overflow-hidden relative group">
                    <img src={img} alt={title} className="
                      w-full max-w-[300px] h-[350px] 
                      rounded-lg" />
                    <div className="absolute left-0 
                      top-[-100%] opacity-0 
                      group-hover:opacity-100 
                      group-hover:top-0 p-4 w-full h-full 
                      bg-black/60 divide-neutral-500 
                      group-hover:backdrop-blur-sm 
                      duration-500">
                      <div className="space-y-4">
                        <Slide cascade>
                          <h1 className="text-3xl 
                            font-bold text-white">
                            {title}</h1>
                          <Fade cascade damping={0.05}>
                            <p className="
                           text-white">{desc}</p>
                          </Fade>
                          <div>
                            <button className="border 
                             border-white-100 px-4 py-2 
                            rounded-lg hover:bg-black/20 
                            duration-300">View</button>
                          </div>
                        </Slide>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
          </motion.div>
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] 
        max-w-7xl mx-auto ${styles.paddingX} flex flex-row 
        items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} 
          text-white`}>Vant<span className="
          text-[#345ba3]">TEC</span></h1>
          <p className={`${styles.heroSubText} mt-2 
          text-white`}>Navigating the Future</p>
          <div className="mt-20 flex flex-wrap gap-10">
            <AnimatedCard />
          </div>
        </div>
      </div>
      {/*<DronesCanvas />*/}
      <div className='absolute xs:bottom-10 bottom-32 
      w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[48px] h-[48px] rounded-[10px] 
          bg-gradient-to-r from-blue-500 via-indigo-500 
          to-cyan-500 flex justify-center items-start 
          p-[2px] hover:shadow-lg 
          hover:shadow-purple-600/30'>
            <div className='flex h-full w-full 
            items-center justify-center rounded-[10px] 
            bg-primary'>
              <motion.div animate={{y: [0, -10, 0],}}
              transition={{duration: 3, 
                repeat: Infinity, repeatType: "loop",}}
              >
                <img src={arrow} className=""/>
              </motion.div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero