import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { styles } from "../styles";
import boat from "../assets/boat.jpg";

const Section = ({ title, heading, description }) => {
  return (
    <div className='p-8 px-4 sm:px-18'>
      <p className='text-sm font-roboto mb-4'>{title}</p> {/* Separación del título */}
      <h1 className='text-3xl sm:text-5xl font-bold font-roboto mb-6'>{heading}</h1> {/* Separación del heading */}
      <p className='text-lg sm:text-2xl font-thin font-roboto'>{description}</p>
    </div>
  );
};

const Achievement = ({ title, description, isList = false }) => {
  return (
    <div className='p-8 w-3/4 pt-0 h-fit'>
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

const BigAchievement = ({ title, description, delay }) => {
  return (
    <div
      className={`p-8 w-full lg:w-auto flex-grow flex flex-col items-center big-achievement opacity-0 transform transition-opacity duration-1000 ease-out`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h1 className='text-6xl sm:text-8xl font-medium'>
        {title}
      </h1>
      <p className='text-lg sm:text-2xl mt-auto'>{description}</p>
    </div>
  );
}

const BigAchievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const elements = document.querySelectorAll('.big-achievement');
    elements.forEach((element, index) => {
      if (inView) {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100');
        element.style.transitionDelay = `${index * 0.3}s`;
      } else {
        element.classList.remove('opacity-100');
        element.classList.add('opacity-0');
      }
    });
  }, [inView]);

  return (
    <div ref={ref} className='flex flex-wrap justify-evenly w-full gap-1'>
      <BigAchievement title="2017" description="founded" delay="0" />
      <BigAchievement title="73" description="members" delay="300" />
      <BigAchievement title="12" description="papers published" delay="600" />
      <BigAchievement title="18" description="awards" delay="900" />
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
  const [paragraphRef, paragraphInView] = useInView({
    threshold: 0.1,
  });
  const [imageRef, imageInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div>
      <div className='w-full min-h-full flex flex-col lg:flex-row'>

        <div ref={paragraphRef} className='w-full lg:w-1/2 flex justify-center items-center'>
          <div
            className={`flex flex-col justify-center items-center p-6 h-full transition-transform duration-1000 ${
              paragraphInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <Section title={"About"} heading={"VantTec"} description={"VantTec is a group of students and teachers from different areas de Tecnológico de Monterrey with the aim of designing, building, and programming autonomous non-manned vehicles, as well as developing technologies for their operation."}/>
            <div className='pl-4 w-full'>
              <button className='bg-blue-500 text-white font-roboto font-bold py-2 px-8 rounded-lg hover:bg-blue-700 self-start'>Learn more</button>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <div
            ref={imageRef}
            className={`flex justify-center items-center transition-transform duration-1000 ${
              imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <img
              src={boat}
              alt="About us"
              className='w-[600px] h-[300px] sm:w-[600px] sm:h-[300px] object-contain bg-orange-400'
            />
          </div>
        </div>

      </div>

      <div className='mt-4'>
        <BigAchievements />
      </div>
    </div>
  );
};


export default About;