import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, FileText, Award } from 'lucide-react';
import Carousel from '../components/shared/Carousel';
import PopOverTop from '../components/shared/PopOverTop.jsx';
import BoatsCanvas from '../components/canvas/Boats.jsx';
import Accordion from '../components/shared/Accordion.jsx';
import {accordion_info_boat, home_aboutus_images, home_about_us_companies_images, projects_blog_boat} from "../constants/index.js";
import CardProject from '../components/shared/CardProject.jsx';

const stats = [
  {
      icon: <Award className="w-8 h-8 text-blue-600 opacity-80" />,
      number: "7",
      label: "International Competitions",
      popoverContent: "This stat represents the number of international competitions participated."
  },
  {
      icon: <Trophy className="w-8 h-8 text-blue-600 opacity-80" />,
      number: "18",
      label: "International Awards",
      popoverContent: "This stat reflects the international awards the team has won."
  },
  {
      icon: <Users className="w-8 h-8 text-blue-600 opacity-80" />,
      number: "73",
      label: "Members",
      popoverContent: "This stat shows the total number of active members in the team."
  },
  {
      icon: <FileText className="w-8 h-8 text-blue-600 opacity-80" />,
      number: "12",
      label: "Papers Published",
      popoverContent: "This stat indicates the number of research papers the team has published."
  },
];

const FirstCarousel = () => (
  <Carousel images={home_aboutus_images} slidesToShow={1} height={"540px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);


const Images_Carousel = () => (
  <div className="flex-row">
      
      <Carousel images={home_about_us_companies_images} isHoverable={true} arrows={false} autoplay={true} autoplaySpeed={0} speed={7000} slidesToShow={7}
                height={"80px"} objectFit={false} cssEase={"linear"}></Carousel>
  </div>
);

const Achievements = () => {
    const achievementData = [
        {
            title: "Purpose",
            description: "Advance the development of autonomous vehicle technology by creating an autonomous boat capable of tackling the challenges presented in RoboNation's RoboBoat competitions. The project integrates key technologies such as control systems, mission solutions, autonomous navigation, and object recognition. Additionally, it aims to contribute to the scientific community through research in areas like control, 3D vision, and obstacle detection. More recently, the project has evolved to focus on innovation and addressing social, economic, and environmental issues, particularly through the development of the AWAS (Autonomous Water Management System), which aims to improve water monitoring and management."
        }
        
    ];

    return (
        <div className="space-y-6">
            {achievementData.map((achievement, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                    <h3 className="text-2xl font-semibold text-white mb-3">{achievement.title}</h3>
                    {Array.isArray(achievement.description) ? (
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                            {achievement.description.map((item, idx) => (
                                <li key={idx} className="text-sm font-light">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-300 font-light">{achievement.description}</p>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

const BoatProject = () => {
  return (
     <div className="min-h-screen bg-black text-white p-9 md:p-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">Boat</h1>
            <p className="text-gray-300 leading-relaxed text-justify">
              The USV (Unmanned Surface Vehicle) project, also known as the autonomous boat,
              was one of the first projects developed by the VantTec Autonomous Vehicles team in 2017.
              It focuses on creating an autonomous boat to meet the challenges of RoboNation's RoboBoat
              competitions. The project integrates control systems, mission solutions, autonomous navigation,
              and object recognition. Additionally, it has contributed to research papers on control, 3D vision,
              and obstacle detection, and has recently shifted focus toward innovation and social, economic,
              and environmental wellbeing through the AWAS project: Autonomous Water Management System.
            </p>

            <PopOverTop stats={stats} />

             
           </div>
       
             
          
        </div>
          

        <div className="mt-16 space-y-8">
          
          <h2 className="text-3xl font-bold">History</h2>
            <CardProject
              projects={projects_blog_boat}
              height="250px"
              isHoverable={true}
              objectFit="cover"
              cssEase="ease-in-out"
            />





          <h2 className="text-3xl font-bold">Our boats</h2>
            
        </div>
      </div>
      </div>
       
       
      
    

    )
};

export default BoatProject;