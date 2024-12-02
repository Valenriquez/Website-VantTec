import React from 'react'
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Mision = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <img src="https://via.placeholder.com/500x500" alt="VantTec team photo" />
        </div>
        <div className="flex-1 pt-20">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-right`}>What we stand for</p>
            <h2 className={`${styles.sectionHeadText} text-right`}>Mision</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl
              leading-[30px] text-right">
                VantTEC is a leading innovator in the tech industry,
                committed to creating innovative solutions that enhance the lives of our customers.
          </motion.p>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Mision, "mision")