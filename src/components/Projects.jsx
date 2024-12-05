/**
 * @fileoverview Complete Projects Component with 3D Model Integration
 * This file contains all the code needed for the Projects component including
 * 3D model viewer, responsive layout, and dark theme styling
 */

import React, { Suspense, useState, useRef } from 'react';
import { Card, CardBody, Tabs, Tab } from "@nextui-org/react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import CanvasLoader from "./Loader";
import { Award, Trophy, Medal, Star, Crown, Lightbulb, Rocket } from 'lucide-react';


/**
 * Example projects data structure
 * Replace with your actual project data
 */
const projectsData = [
  {
    id: 1,
    name: "VTec S4",
    modelPath: "./drone/vtec_s4.gltf",
    image: "/roboboatPhoto.jpg",
    description: "Advanced autonomous drone for aerial surveillance and mapping",
    specifications: {
      weight: "2.5kg",
      dimensions: "50cm x 50cm x 20cm",
      flightTime: "30 minutes",
      maxSpeed: "20 m/s",
      sensors: [
        "4K Camera",
        "LiDAR",
        "GPS",
        "IMU"
      ]
    },
    achievements: [
      "1st Place International Drone Competition 2023",
      "Best Technical Design Award",
      "Innovation in Autonomous Systems Award"
    ]
  },
  {
    id: 2,
    name: "VTec S5",
    modelPath: "./drone/vtec_s4.gltf",
    image: "/roboboatPhoto.jpg",
    description: "Next-generation autonomous underwater vehicle for deep-sea exploration",
    specifications: {
      weight: "45kg",
      dimensions: "150cm x 80cm x 60cm",
      maxDepth: "100m",
      operationTime: "4 hours",
      sensors: [
        "Sonar Array",
        "Depth Sensors",
        "HD Cameras",
        "Temperature Sensors"
      ]
    },
    achievements: [
      "RoboSub 2023 Finals Qualifier",
      "Best Innovation Award",
      "Technical Excellence Recognition"
    ]
  }
];

/**
 * 3D Model Component
 * Handles the rendering of individual 3D models with lighting
 */
const Model3D = ({ modelPath, scale = 6, position = [0, 0, 0] }) => {
  const model = useGLTF(modelPath);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.updateMatrixWorld();
    }
  });

  return (
      <mesh ref={modelRef}>
        {/* Ambient light for overall illumination */}
        <ambientLight intensity={0.3} />

        {/* Main directional light */}
        <directionalLight
            position={[0, 5, 10]}
            intensity={1.5}
            castShadow
            shadow-mapSize={1024}
        />

        {/* Additional point lights for detail */}
        <pointLight intensity={2} position={[1, 1, 0]} color="#ffffff"/>
        <pointLight intensity={1} position={[3.5, 1, 0]} color="#ffffff"/>

        {/* The 3D model itself */}
        <primitive
            object={model.scene}
            scale={scale}
            position-y={position[1]}
            rotation-y={position[2]}
        />
      </mesh>
  );
};

/**
 * Canvas Wrapper Component
 * Provides the 3D rendering context and controls
 */
const ModelCanvas = ({ modelPath }) => {
  return (
      <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{
            position: [25, 15, 10],
            fov: 25,
            near: 0.1,
            far: 200,
          }}
          gl={{ preserveDrawingBuffer: true }}
          className="w-full h-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
              autoRotate
              enableZoom={true}
              enablePan={true}
              maxDistance={50}
              minDistance={10}
          />
          <Model3D modelPath={modelPath} />
          <Preload all />
        </Suspense>
      </Canvas>
  );
};


/**
 * Maps achievement types to icons
 * Automatically assigns icons based on keywords in the achievement text
 */
const getAchievementIcon = (achievement) => {
  const text = achievement.toLowerCase();

  if (text.includes('1st') || text.includes('first')) {
    return <Trophy className="w-5 h-5 text-yellow-500" />;
  } else if (text.includes('award')) {
    return <Award className="w-5 h-5 text-blue-500" />;
  } else if (text.includes('innovation')) {
    return <Lightbulb className="w-5 h-5 text-purple-500" />;
  } else if (text.includes('excellence')) {
    return <Crown className="w-5 h-5 text-amber-500" />;
  } else if (text.includes('best')) {
    return <Medal className="w-5 h-5 text-emerald-500" />;
  } else {
    return <Star className="w-5 h-5 text-sky-500" />;
  }
};

/**
 * Achievement Section Component - Now with icons
 */
const AchievementsSection = ({ achievements }) => {
  return (
      <div className="space-y-3 sm:space-y-4">
        {achievements.map((achievement, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {getAchievementIcon(achievement)}
                </div>
                <p className="text-gray-300 font-light text-sm sm:text-base flex-grow">
                  {achievement}
                </p>
              </div>
            </motion.div>
        ))}
      </div>
  );
};
/**
 * Project Card Component - Adjusted height for larger screens
 */
const ProjectCard = ({ project, isSelected, onClick }) => {
  return (
      <div className="w-full">
        <Card
            isPressable
            onPress={onClick}
            className={`w-full h-1/2 transition-all duration-200 bg-white/5 backdrop-blur-sm ${
                isSelected ? 'scale-105 border-2 border-blue-500' : 'hover:scale-102 border border-white/10'
            }`}
        >
          <CardBody className="p-0">
            <div className="aspect-video sm:aspect-[16/10] lg:aspect-[16/9] w-full h-full">
              <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
  );
};


/**
 * Project Details Component
 * Displays detailed information about the selected project
 */
const ProjectDetails = ({ project }) => {
  return (
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-2 sm:mb-4">
            {project.name}
          </h1>
          <p className="text-base sm:text-xl text-gray-300 font-light leading-relaxed">
            {project.description}
          </p>
        </div>

        <Tabs
            aria-label="Project details"
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-4 sm:gap-6",
              cursor: "w-full bg-blue-500",
              tab: "max-w-fit px-0 h-10 sm:h-12 text-white text-sm sm:text-base",
              tabContent: "group-data-[selected=true]:text-blue-500"
            }}
        >
          <Tab key="achievements" title="Achievements">
            <AchievementsSection achievements={project.achievements} />
          </Tab>

          <Tab key="specs" title="Specifications">
            <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
              {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10">
                    <h3 className="text-base sm:text-lg font-semibold text-white capitalize mb-2">
                      {key}
                    </h3>
                    {Array.isArray(value) ? (
                        <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                          {value.map((item, idx) => (
                              <li key={idx} className="text-gray-300 font-light text-sm sm:text-base">
                                {item}
                              </li>
                          ))}
                        </ul>
                    ) : (
                        <p className="text-gray-300 font-light text-sm sm:text-base">
                          {value}
                        </p>
                    )}
                  </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
  );
};


/**
 * Main Projects Component - Updated container for cards
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
      <div className="min-h-screen text-white flex flex-col justify-center w-full">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-16">
          {/* Header Section */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left"
          >
            <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-gray-200 font-light mb-6 leading-relaxed">
              Pioneering autonomous vehicle technology through innovation and research
            </p>
          </motion.div>

          {/* Project Selection Grid - Moved to top */}
          <div className="max-w-[600px] mx-auto lg:max-w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {projectsData.map((project) => (
                  <ProjectCard
                      key={project.id}
                      project={project}
                      isSelected={selectedProject.id === project.id}
                      onClick={() => setSelectedProject(project)}
                  />
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Project Details */}
            <div className="order-2 lg:order-1">
              <ProjectDetails project={selectedProject}/>
            </div>

            {/* 3D Model Viewer */}
            <div className="order-1 lg:order-2 bg-white/5 rounded-xl aspect-square border border-white/10">
              <ModelCanvas modelPath={selectedProject.modelPath}/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;