import { div } from 'framer-motion/client'
import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { boat, drone, submarine } from '../assets'

const AwardsScrollSection = () => {
  return (
    <div className="relative h-fit">
      <AwardPage title='Special Award de Drone Award (2017)' competition_image={boat}/>
      <AwardPage title='Special Award de Engineering Integrity (2018)' competition_image={drone}/>
      <AwardPage title='RoboBoat 2020' competition_image={submarine}/>
    </div>
  );
};

const AwardPage = ({ title, competition_image, award_card }) => {
  const [ref01, ref01InView] = useInView({
    threshold: 0.1,
  });
  const [ref02, ref02InView] = useInView({
    threshold: 0.1,
  });
  const [ref03, ref03InView] = useInView({
    threshold: 0.1,
  });
  return (
    <div className="h-screen flex flex-col sm:flex-row px-0">
      <div className="h-full flex flex-col sm:flex-row w-full">
        <div ref={ref01} className="sm:w-7/12 h-full flex flex-col py-8 px-4 sm:p-8">
          <h1 className={`text-white text-3xl items-start justify-start mb-4 transition-transform duration-1000 ${
              ref01InView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-y-full'
          }`}>{title}</h1>
          <img ref={ref02} className={`w-full max-h-full object-contain pb-8 transition-transform duration-1000 ${
              ref02InView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`} src={competition_image} />
        </div>
        <div ref={ref03} className={`sm:w-5/12 h-full flex flex-col py-8 px-4 sm:p-8`}>
          <img className={`bg-green-500 w-full h-full transition-transform duration-1000 ${
              ref03InView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        </div>
      </div>
    </div>
  )
}

const Awards = () => {

  const [imageInView, setImageInView] = useInView({
    threshold: 0.1,
  })

  return (
    <section className='w-full min-h-full mx-auto flex flex-col'>
      <div className='mt-[80px] m-16'>
        <h1 className='text-3xl sm:text-5xl font-bold font-roboto mb-6 place-self-center'>Awards</h1>
      </div>
      <AwardsScrollSection />
    </section>
  )
}

export default Awards