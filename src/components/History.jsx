import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const History = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Our journey so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>History</h2>
      </motion.div>
      <div>
        <Parallax pages={1}>
          <ParallaxLayer offset={0} speed={2.5}>
            <div>Parallax</div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default SectionWrapper(History, "history")