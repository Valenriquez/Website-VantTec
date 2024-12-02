import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { testimonials } from '../constants';
import { styles } from '../styles';
import { vanttec, arrow } from '../assets';
import { useInView } from 'react-intersection-observer';

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
        element.style.transitionDelay = '0s';
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

const TestimonialCard = ({ id, name, role, text, img, cards, setCards, resetCards }) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const isFront = id === cards[cards.length - 1]?.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((prev) => prev.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.div
      className="w-[300px] h-[450px] p-[1.5px] rounded-lg bg-gradient-to-r 
      from-blue-500 via-indigo-500 to-cyan-500 shadow-card"
      whileDrag={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb (0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      onDragEnd={handleDragEnd}
    >
      <div className="bg-gray-600 rounded-lg p-6 shadow-md flex flex-col items-center hover:cursor-grab origin-bottom active:cursor-grabbing w-full h-full">
        <img
          src={img}
          alt={name}
          className="w-32 h-32 object-cover rounded-full border border-gray-300"
        />
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">{name}</h2>
          <h3 className="text-base text-blue-800">{role}</h3>
          <p className="mt-4 text-black">"{text}"</p>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const TestimonialList = ({ initialCards }) => {
  const [cards, setCards] = React.useState(initialCards);

  const resetCards = () => {
    setCards(initialCards);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative grid">
        {cards.map((card) => (
          <TestimonialCard
            key={card.id}
            {...card}
            cards={cards}
            setCards={setCards}
          />
        ))}
      </div>
      {cards.length === 0 && (
        <button
          onClick={resetCards}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Restart
        </button>
      )}
    </div>
  );
};


const About = () => {
  const [cards, setCards] = useState(testimonials);
  const [paragraphInView, setParagraphInView] = useInView({
    threshold: 0.1,
  })
  const [imageInView, setImageInView] = useInView({
    threshold: 0.1,
  })

  return (
    <section className={`relative w-full h-full mx-auto`}>
      <img src={vanttec} className="absolute w-full h-full object-cover" />
      <div className="absolute w-full h-full top-0 left-0 bg-[#000000cc]"></div>
      <div className={`relative inset-0 top-[0px] max-w-7xl 
        mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}>
        <div className="flex-1 mt-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Vant<span className="text-[#345ba3]">TEC</span>,
            About Us
          </h1>
          <p className={`${styles.heroSubText} mt-2 
          text-white`}>
            VantTEC is a leading innovator in the tech industry,
            committed to creating innovative solutions that
            enhance the lives of our customers.
          </p>
        </div>
        <div className="flex-1 mt-10 grid place-items-center">
        <TestimonialList initialCards={testimonials} />
        </div>
       
      </div>
      <div className="relative bottom-0 w-full">
        <BigAchievements />
      </div>
    </section>
  );
};

export default About;