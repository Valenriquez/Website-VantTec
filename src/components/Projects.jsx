import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
import { styles } from "../styles";
import { DronesCanvas, BoatsCanvas, SdvsCanvas, SubmarinesCanvas } from "./canvas";
import { cardsData } from "../constants";
import { Slide, Fade } from "react-awesome-reveal";
import { slideIn, fadeIn } from "../utils/motion";

const AnimatedCard = ({ index, title, img, desc, onViewClick }) => {
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
                      <button 
                        onClick={onViewClick}
                        className="border border-white-100 
                        px-3 py-1 rounded-lg hover:bg-black/20 
                        duration-300 text-sm">View</button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </motion.div>
        </Tilt>
      );
};

const Projects = () => {
  const [selectedCanvas, setSelectedCanvas] = useState('drones');
  const [animationKey, setAnimationKey] = useState(0);

  const handleViewClick = (canvasType) => {
    setSelectedCanvas(canvasType);
    setAnimationKey(prevKey => prevKey + 1);
  };

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col">
      <div className={`mt-[80px] ${styles.paddingX} xl:flex-row flex flex-col-reverse gap-10 overflow-hidden`}>
        <div className="flex-[0.75]">
          <h1 className={`${styles.sectionSubText} text-white`}>
            View our Work </h1>
          <p className={`${styles.sectionHeadText} mt-2 text-white`}>
            Projects</p>
          <div className="mt-6 flex flex-wrap gap-7">
            {cardsData.map((cardData, index) => (
              <AnimatedCard 
                key={cardData.title} 
                index={index} 
                {...cardData} 
                onViewClick={() => handleViewClick(cardData.canvasType)}
              />
            ))}
          </div>
        </div>
        <div className="xl:flex-1 xl:h-full md:h-[550px] h-[350px] flex flex-col">
          <motion.div 
            key={animationKey}
            variants={slideIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            animate="show"
            className="flex-1"
          >
            {selectedCanvas === 'drones' && <DronesCanvas />}
            {selectedCanvas === 'boats' && <BoatsCanvas />}
            {selectedCanvas ==='sdvs' && <SdvsCanvas />}
            {selectedCanvas === 'submarines' && <SubmarinesCanvas />}
          </motion.div>
          <motion.div 
            variants={slideIn('up', 'tween', 0.2, 1)} 
            initial="hidden" 
            animate="show" 
            className="mt-4 text-white-100 flex flex-col gap-4 items-center text-center"
          >
            <p>{cardsData.find(card => card.canvasType === selectedCanvas).desc}</p>
            <div className='w-[100px] h-[48px] rounded-[10px] 
            bg-gradient-to-r from-blue-500 via-indigo-500 
            to-cyan-500 flex justify-center items-start p-[2px] 
            hover:shadow-lg hover:shadow-purple-600/30'>
              <Link to={cardsData.find(card => card.canvasType === selectedCanvas).title} rel="noopener noreferrer" className="text-white flex items-center justify-center h-full w-full rounded-[10px] bg-primary">
                View More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects;