import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
import { styles } from "../styles";
import { DronesCanvas } from "./canvas";
import { arrow } from '../assets'
import { cardsData } from "../constants";
import { Slide, Fade } from "react-awesome-reveal";
import { slideIn, fadeIn } from "../utils/motion";

const AnimatedCard = ({ index, title, img, desc }) => {
  return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div 
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          initial="hidden"
          animate="show" 
          className="w-full p-[1.5px] rounded-lg bg-gradient-to-r 
          from-blue-500 via-indigo-500 to-cyan-500 shadow-card"
        >
          <div 
            className="bg-tertiary rounded-lg overflow-hidden 
            relative group"
          >
            <img src={img} alt={title} className="w-full h-[250px] 
            rounded-lg object-cover" />
              <div className="absolute left-0 top-[-100%] opacity-0 
              group-hover:opacity-100 group-hover:top-0 p-3 w-full 
              h-full bg-black/60 divide-neutral-500 
              group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-2">
                  <Slide cascade>
                    <h1 className="text-2xl font-bold text-white">
                      {title}</h1>
                    <Fade cascade damping={0.05}>
                      <p className="text-sm text-white">{desc}</p>
                    </Fade>
                    <div>
                      <button className="border border-white-100 
                      px-3 py-1 rounded-lg hover:bg-black/20 
                      duration-300 text-sm">Ver</button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </motion.div>
        </Tilt>
      );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col">
      <div className={`mt-[80px]  ${styles.paddingX} xl:flex-row
        flex flex-col-reverse gap-10 overflow-hidden`}>
        <div className="flex-[0.75]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Vant<span className="text-[#345ba3]">TEC</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Navigating the Future</p>
          <div className="mt-6 flex flex-wrap gap-7">
            {cardsData.map((cardData, index) => (
              <AnimatedCard key={cardData.title} index={index} 
              {...cardData} />
            ))}
          </div>
        </div>
        <motion.div 
          variants={slideIn('right', 'tween', 0.2, 1)}
          initial="hidden"
          animate="show"
          className="xl:flex-1 xl:h-full md:h-[550px] h-[350px]"
        >
          <DronesCanvas />
        </motion.div>
      </div>
      <motion.div 
        className='mt-auto mb-10 w-full flex justify-center 
        items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
      >
        <a href='#about'>
          <div className='w-[48px] h-[48px] rounded-[10px] 
          bg-gradient-to-r from-blue-500 via-indigo-500 
          to-cyan-500 flex justify-center items-start p-[2px] 
          hover:shadow-lg hover:shadow-purple-600/30'>
            <div className='flex h-full w-full items-center 
            justify-center rounded-[10px] bg-primary'>
              <motion.div 
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "loop",
                }}
              >
                <img src={arrow} alt="Flecha hacia abajo" 
                className=""/>
              </motion.div>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero;