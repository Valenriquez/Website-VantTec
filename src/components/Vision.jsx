import React from 'react'
import {styles} from '../styles';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { institutions } from '../constants';
import { SectionWrapper } from '../hoc';

const InstitutionCard = ({index, title, icon}) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} 
      className="w-full bg-gradient-to-r from-blue-500 
      via-indigo-500 to-cyan-500  p-[1px] rounded-[20px] 
        shadow-card">
        <div options={{max: 45, scale: 1, speed: 450}} 
          className="bg-primary rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-full h-full 
              object-contain" />
        </div>
    </motion.div>
  </Tilt>
)

const Vision = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 pt-20">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Inspiration for Tomorrow</p>
            <h2 className={styles.sectionHeadText}>Vision</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl
              leading-[30px]">
                VantTEC is a leading innovator in the tech industry,
                committed to creating innovative solutions that enhance the lives of our customers.
          </motion.p>
        </div>
        <div className="flex-1">
          <img src="https://via.placeholder.com/500x500" alt="VantTec team photo" />
        </div>
      </div>
      <motion.div variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} text-center`}>Paths to excellence</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Horizons</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-7xl
              leading-[30px] text-center">
                Celebrating the achievements of our members as they forge
                remarkable paths in top institutions and industries worldwide.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {institutions.map((institution, index) => (
          <InstitutionCard key={institution.title} index={index} {...institution} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Vision, "vision")