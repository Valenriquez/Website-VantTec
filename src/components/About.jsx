import React from 'react'

import { styles } from "../styles";
import boat from "../assets/boat.jpg";


const Section = ({ title, heading, description }) => {
  return (
    <div className='p-8 px-4 sm:px-18'>
      <p className='text-sm font-roboto mb-4'>{title}</p> {/* Separación del título */}
      <h1 className='text-3xl sm:text-5xl font-bold font-roboto mb-6'>{heading}</h1> {/* Separación del heading */}
      <p className='pt-4 text-lg sm:text-2xl font-thin font-roboto'>{description}</p>
    </div>
  );
};

const Achievement = ({ title, description, isList = false }) => {
  return (
    <div className='p-8 w-1/2 pt-0 h-fit'>
      <p className='text-4xl font-bold font-roboto'>{title}</p>
      {/* Si isList es true, renderizamos una lista, de lo contrario, renderizamos un párrafo */}
      {isList ? (
        <ul className='list-disc pl-5 pt-2 text-xl font-thin font-roboto'>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className='pt-2 text-xl font-thin font-roboto'>{description}</p>
      )}
    </div>
  );
}


const BigAchievement = ({ title, description }) => {
  return (
    <div className='p-8 w-full lg:w-auto flex-grow flex flex-col items-center'>
      <h1 className='text-6xl sm:text-8xl font-medium'>
        {title}
      </h1>
      <p className='text-lg sm:text-2xl mt-auto'>{description}</p>
    </div>
  );
}

const BigAchievements = () => {
  return (
    <div className='flex flex-wrap justify-evenly w-full gap-1'>
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
      <Achievement title="Mission" description="Participate annually in RoboNation competitions, as well as other autonomous vehicle projects. Develop research projects that culminate in scientific articles based on technologies used by the group to promote science and technology in areas related to autonomous vehicles." />
      <Achievement title="Vision" description="To be one of the main exponents in Mexico in terms of autonomous vehicles. To inspire young people to get involved in research in areas of science and technology. In addition, to help them learn about national and international opportunities in the academic and professional fields." />
      <Achievement title="Since 2017" description="We have worked to participate annually in RoboNation's RoboBoat and RoboSub contests, becoming a leading group where every year we manage to position ourselves among the best teams at an international level." />
      <Achievement 
        title="Values" 
        description={[
          "Respect and help others.",
          "Create the craziest things.",
          "Share knowledge.",
          "Be yourself and be confident in your talent.",
          "Unlimited creativity.",
          "Passion and Inspiration.",
          "Commitment and dedication.",
        ]}
        isList={true}  
      />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div className='w-full min-h-screen flex flex-col lg:flex-row'>

        <div className='w-full lg:w-3/5'>
          <Section
            title="About us"
            heading="We aim to become one of the main exponents of autonomous vehicles in Mexico."
            description="VantTec is a group of students and teachers from different areas de Tecnológico de Monterrey with the aim of designing, building, and programming autonomous non-manned vehicles, as well as developing technologies for their operation."
          />
          <Achievements />
        </div>

        <div className='w-full lg:w-2/5 h-full flex justify-center items-start' style={{ marginTop: '250px' }}>
          <img
            src={boat}
            alt="About us"
            className='w-[300px] sm:w-[500px] h-[600px] sm:h-[690px] object-cover'
          />
        </div>

      </div>

      <div className='mt-4'>
        <BigAchievements />
      </div>
    </div>
  );
};


export default About