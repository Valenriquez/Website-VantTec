import React from 'react';
import Carousel from '../components/shared/Carousel';
import {home_aboutus_images, tabsDataBoat} from "../constants/index.js";
import TabsComponent from '../components/shared/Tabs.jsx';
import VideoCarousel from '../components/shared/VideoCarousel.jsx';

const videoList = [
  {
    src: "/videos/1_boat.mov",
    poster: "/videos/17sept2.jpg",
    title: "Back to Basics",
  },
  {
    src: "/videos/2_boat.mov",
    poster: "/videos/18sept1.jpg",
    title: "An Unexpected Surprise",
  },
  {
    src: "/videos/3_boat.mov",
    poster: "/videos/20sept1.jpg",
    title: " Mapping New Possibilities",
  },
  {
    src: "/videos/4_boat.mov",
    poster: "/videos/5sept2.jpg",
    title: "The Hull—A Fresh Start",
  }, {
    src: "/videos/5_boat.mov",
    poster: "/videos/27nov1.jpg",
    title: " Reinforcing for Resilience",
  }, {
    src: "/videos/7_boat.mov",
    poster: "/videos/11dic1.jpg",
    title: "Testing and Triumphs",
  }
];


const FirstCarousel = () => (
  <Carousel images={home_aboutus_images} slidesToShow={1} height={"500px"} arrows={false} autoplay={true} autoplaySpeed={3000} speed={400} isHoverable={true} objectFit={true}></Carousel>
);

const BoatProject = () => {
  return (
     <div className="min-h-screen bg-black text-white p-9 md:p-20">
        <FirstCarousel />
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <h1 className="py-8 text-5xl md:text-6xl font-bold">Boat</h1>
              <p className="text-gray-300 leading-relaxed text-justify">
              The Autonomous Surface Boat (USV) project, launched in 2017, marked one of the first initiatives by VantTec, the Autonomous Unmanned Vehicles team at Tecnológico de Monterrey. 
              This ambitious endeavor focuses on developing a self-operating boat capable of tackling the diverse challenges presented in the annual RoboBoat competitions organized by RoboNation. 
              The project integrates cutting-edge systems for autonomous navigation, mission-solving, control algorithms, and object recognition.

              Beyond its competitive edge, the USV has significantly contributed to academic advancement, supporting the publication of research papers in fields such as control systems, 
              3D vision, and obstacle detection. Recently, the project has shifted towards creating impactful solutions through innovation, emphasizing social, economic, and environmental 
              sustainability. This evolution has given rise to AWAS (Autonomous Water Administration System), an initiative dedicated to improving water management with autonomy at its core.
              </p>
          </div>
        <div className="mt-16 space-y-8">
        {/*
          <h2 className="text-3xl font-bold">History</h2>
            <CardProject
              projects={projects_blog_boat}
              height="250px"
              isHoverable={true}
              objectFit="cover"
              cssEase="ease-in-out"
            />
        */}
         <div className="flex justify-center">
              <VideoCarousel videos={videoList} width="80%" height="500px" />
          </div>
          
          <TabsComponent tabs={tabsDataBoat} />
        
           
        
      </div>
    </div>
  </div>

    )
};

export default BoatProject;