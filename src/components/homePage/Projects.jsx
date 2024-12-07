/**
 * Projects Component
 * A complete component for displaying projects with 3D models
 * Features:
 * - Project selection via tabs
 * - 3D model viewer
 * - Achievements and specifications display
 * - Responsive design
 */

import React, { Suspense, useState, useRef } from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import CanvasLoader from "../Loader.jsx";
import { Award, Trophy, Medal, Star, Crown, Lightbulb } from 'lucide-react';

/**
 * Sample projects data structure
 */
const projectsData = [
    {
        id: 1,
        name: "UUV",
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
        name: "UAV",
        modelPath: "./drone/uuv2.gltf",
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
    },
    {
        id: 3,
        name: "SDV",
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
    },
    {
        id: 4,
        name: "VTec S5",
        modelPath: "./drone/uuv2.gltf",
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
 * Handles individual model rendering with lighting and rotation
 */
const Model3D = ({ modelPath, scale = 6 }) => {
    const model = useGLTF(modelPath);
    const pivotRef = useRef();

    useFrame(() => {
        if (pivotRef.current) {
            pivotRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group ref={pivotRef}>
            <mesh>
                <ambientLight intensity={0.3} />
                <directionalLight
                    position={[0, 5, 10]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={1024}
                />
                <pointLight intensity={2} position={[1, 1, 0]} color="#ffffff"/>
                <pointLight intensity={1} position={[3.5, 1, 0]} color="#ffffff"/>
                <primitive
                    object={model.scene}
                    scale={scale}
                    position={[-5, 0, 0]}
                />
            </mesh>
        </group>
    );
};

/**
 * Canvas Component
 * Provides 3D rendering context and controls
 */
const ModelCanvas = ({ modelPath }) => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [25, 15, 10], fov: 25, near: 0.1, far: 200 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full h-full"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={true}
                    enablePan={true}
                    maxDistance={30}
                    minDistance={10}
                    target={[0, 0, 0]}
                />
                <Model3D modelPath={modelPath} />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

/**
 * Achievement icon selection based on text content
 */
const getAchievementIcon = (achievement) => {
    const text = achievement.toLowerCase();
    if (text.includes('1st') || text.includes('first')) {
        return <Trophy className="w-6 h-6 text-blue-600 opacity-80" />;
    } else if (text.includes('award')) {
        return <Award className="w-6 h-6 text-blue-600 opacity-80" />;
    } else if (text.includes('innovation')) {
        return <Lightbulb className="w-6 h-6 text-blue-600 opacity-80" />;
    } else if (text.includes('excellence')) {
        return <Crown className="w-6 h-6 text-blue-600 opacity-80" />;
    } else if (text.includes('best')) {
        return <Medal className="w-6 h-6 text-blue-600 opacity-80" />;
    }
    return <Star className="w-6 h-6 text-blue-600 opacity-80" />;
};

/**
 * Project tab navigation component with inline responsive layout
 */
const ProjectTabs = ({ selectedProject, onProjectChange, projects }) => (
    <Tabs
        selectedKey={selectedProject}
        onSelectionChange={onProjectChange}
        variant="solid"
        classNames={{
            base: "w-full", // Full width container
            tabList: [
                // Base styles
                "relative",
                "p-1",
                "border",
                "border-white/10",
                "bg-white/5",
                "rounded-xl",
                // Flex layout
                "flex",
                "flex-row",
                "flex-nowrap", // Prevent wrapping
                "overflow-x-auto", // Enable horizontal scroll
                "gap-0",
                "scrollbar-thin",
                "scrollbar-thumb-white/10",
                "scrollbar-track-transparent"
            ].join(" "),
            cursor: "bg-blue-500",
            tab: [
                // Base styles
                "h-12",
                "flex-shrink-0", // Prevent shrinking
                "data-[selected=true]:bg-white/10",
                "rounded-lg",
                "transition-all",
                "duration-200",
                "hover:bg-white/5",
                // Responsive width
                "w-[120px]",
                "sm:w-[140px]",
                "md:w-[160px]",
                // Content alignment
                "flex",
                "items-center",
                "justify-center",
                "px-2",
                "py-2"
            ].join(" "),
            tabContent: [
                "group-data-[selected=true]:text-white",
                "w-full",
                "text-center"
            ].join(" ")
        }}
    >
        {projects.map((project, index) => (
            <Tab
                key={`project-${index}`}
                title={
                    <div className="w-full">
                        <span className="text-sm sm:text-base font-semibold truncate block">
                            {project.name}
                        </span>
                    </div>
                }
            />
        ))}
    </Tabs>
);
/**
 * Achievements display component
 */
const AchievementsSection = ({ achievements }) => (
    <div className="space-y-4 pb-4">
        {achievements.map((achievement, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/5 rounded-xl p-4 flex items-center gap-4 border border-white/10"
            >
                {getAchievementIcon(achievement)}
                <p className="text-gray-300 font-light">{achievement}</p>
            </motion.div>
        ))}
    </div>
);

/**
 * Specifications display component
 */
const SpecificationsSection = ({ specifications }) => (
    <div className="space-y-4 pb-4">
        {Object.entries(specifications).map(([key, value], idx) => (
            <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
                <h3 className="text-lg font-semibold capitalize mb-2">{key}</h3>
                {Array.isArray(value) ? (
                    <ul className="space-y-2">
                        {value.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-gray-300 font-light flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-80" />
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-300 font-light">{value}</p>
                )}
            </motion.div>
        ))}
    </div>
);

/**
 * Project details component with achievements and specifications tabs
 */
const ProjectContent = ({ project }) => {
    const [selectedTab, setSelectedTab] = useState("achievements");

    return (
        <div className="space-y-6 mt-6">
            <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                    {project.name}
                </h2>
                <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed">
                    {project.description}
                </p>
            </div>

            <Tabs
                selectedKey={selectedTab}
                onSelectionChange={setSelectedTab}
                variant="underlined"
                classNames={{
                    tabList: "gap-6 relative rounded-none p-0 border-b border-white/10",
                    cursor: "w-full bg-blue-500",
                    tab: "max-w-fit px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-blue-500"
                }}
            >
                <Tab key="achievements" title="Achievements">
                    <div className="mt-6 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-white/5">
                        <AchievementsSection achievements={project.achievements} />
                    </div>
                </Tab>
                <Tab key="specifications" title="Specifications">
                    <div className="mt-6 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-white/5">
                        <SpecificationsSection specifications={project.specifications} />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

/**
 * Main Projects component
 * Handles overall layout and state management
 */
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState("project-0");
    const currentProject = projectsData[parseInt(selectedProject.split('-')[1])];

    return (
        <section id="projects" className="xs:h-min-[100%] lg:h-min-[70%] text-white flex flex-col justify-center items-center w-full">
            <div className="container mx-auto px-2 sm:px-6 py-2 sm:py-12 space-y-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                        OUR PROJECTS
                    </h1>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    {/* Left Column: Project Selection and Details */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <ProjectTabs
                            selectedProject={selectedProject}
                            onProjectChange={setSelectedProject}
                            projects={projectsData}
                        />
                        <ProjectContent project={currentProject} />
                    </motion.div>

                    {/* Right Column: 3D Model */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:sticky lg:top-24 h-[500px] sm:h-[600px]"
                    >
                        <div className="bg-white/5 rounded-xl w-full h-full border border-white/10">
                            <ModelCanvas modelPath={currentProject.modelPath} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;