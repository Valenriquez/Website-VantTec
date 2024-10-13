import { motion } from "framer-motion";

import { styles } from "../styles";
import { DronesCanvas } from "./canvas";
import { arrow } from '../assets'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Vant<span className="text-[#345ba3]">TEC</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>Navigating the Future</p>
        </div>
      </div>
      <DronesCanvas />
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