import React from 'react'

import { styles } from "../styles";


const Section = ({ title, heading, description }) => {
  return (
    <div className='p-8 px-18'>
      <p className='text-sm font-roboto'>{title}</p>
      <h1 className='text-5xl font-bold font-roboto'>{heading}</h1>
      <p className='pt-2 text-2xl font-thin font-roboto'>{description}</p>
    </div>
  );
};

const Achievement = ({ title, description }) => {
  return (
    <div className='p-8 w-1/2 pt-0 h-fit'>
      <p className='text-4xl font-bold font-roboto'>{title}</p>
      <p className='pt-2 text-xl font-thin font-roboto'>{description}</p>
    </div>
  );
}

const BigAchievement = ({ title, description }) => {
  return (
    <div className='p-8 flex-grow flex items-center'>
      <h1 className='text-8xl font-medium'>
        {title}
      </h1>
      <p className='text-2xl mt-auto'>{description}</p>
    </div>
  );
}

const BigAchievements = () => {
  return (
    <div className='flex flex-wrap w-full space-x-4'>
      <BigAchievement title="2017" description="founded" />
      <BigAchievement title="73" description="members" />
      <BigAchievement title="12" description="papers published" />
      <BigAchievement title="18" description="awards" />
    </div>
  );
}

const Achievements = () => {
  return (
    <div className='flex flex-wrap w-full pt-4'>
      <Achievement title="Since 2017" description="Since 2017, we've worked to participate annualy in RoboNation's RoboBoat and RoboSub competitions" />
      <Achievement title="Since 2017" description="Since 2017, we've worked to participate annualy in RoboNation's RoboBoat and RoboSub competitions" />
      <Achievement title="Since 2017" description="Since 2017, we've worked to participate annualy in RoboNation's RoboBoat and RoboSub competitions" />
      <Achievement title="Since 2017" description="Since 2017, we've worked to participate annualy in RoboNation's RoboBoat and RoboSub competitions" />
    </div>
  );
}

const About = () => {
  return (
    <div>
      <div className='w-full min-h-screen flex'>

      <div className='w-3/5'>
        <Section
          title="About us"
          heading="We aim to become one of the main exponents of autonomous vehicles in Mexico,"
          description="to Inspire young people to get involved in research in areas related to science and technology. In addition, help them learn about opportunities in academic and professional fields."
        />
        <Achievements/>
      </div>

      <div className='w-2/5 h-full min-h-screen flex justify-center items-center'>
        <div className='w-[300px] h-[400px] bg-black'></div>
      </div>

    </div>
      <BigAchievements/>
    </div>
  );
};

export default About