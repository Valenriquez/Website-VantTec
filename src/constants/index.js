import {
  sdv,
  drone,
  boat,
  submarine,
  juanito,
  maria,
  pedro,
  ana,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "research",
    title: "Research",
  },
  {
    id: "awards",
    title: "Awards",
  },
  {
    id:"sponsors",
    title: "Sponsors"
  }
];

const cardsData = [
  {
    img: sdv,
    title: "SDV",
    desc: "A 100% electric vehicle with level 3 autonomy. We integrated advanced control algorithms and a sensor system to detect obstacles and position itself within the lane.",
  },
  {
    img: drone,
    title: "Drone",
    desc: "Its main focus is on making solutions based on autonomous dones, such as package delivery, as well as participation in competitions, such as the Mexican Robotics Tournament.",
  },
  {
    img: boat,
    title: "Boat",
    desc: "Develops an autonomous boat for RoboBoat competitions, focusing on control, navigation, and object recognition.",
  },
  {
    img: submarine,
    title: "Submarine",
    desc: "Creates an autonomous submarine for RoboSub, tackling underwater tasks in global competitions.",
  },  
]

const testimonials = [
  {
    id: 1,
    name: "Juanito Vargas",
    role: "Project Manager",
    text: "VantTec helped me turn theoretical knowledge into practical skills. It was the highlight of my university life!",
    img: juanito,
  },
  {
    id: 2,
    name: "Maria Sánchez",
    role: "Product Manager",
    text: "Joining VantTec was a game-changer for my career. I gained hands-on experience in autonomous robotics and teamwork, which made me stand out to employers.",
    img: maria,
  },
  {
    id: 3,
    name: "Pedro Pérez",
    role: "UI/UX Designer",
    text: "The culture of innovation and support at VantTec was unmatched. The challenges pushed me beyond my limits and prepared me for real-world engineering projects.",
    img: pedro,
  },
  {
    id: 4,
    name: "Ana García",
    role: "Web Developer",
    text: "I never imagined I would be part of an international competition team during university. VantTec gave me the confidence to attend to one.",
    img: ana,
  }
]

export { cardsData, testimonials };

export const images = [
  {
    src: "/research/1-rp-image.webp",
    alt: "Finite-time control for an Unmanned Surface Vehicle based on adaptive sliding mode strategy",
    info: "Finite-time adaptive sliding mode control for USVs",
  },
  {
    src: "/research/2-rp-image.webp",
    alt: "Adaptive dynamic programming and deep reinforcement learning for the control of an unmanned surface vehicle: Experimental results",
    info: "ADP and deep RL in USV control—experimental results",
  },
  {
    src: "/research/3-rp-image.webp",
    alt: "Guidance and Control Based on Adaptive Sliding Mode Strategy for a USV Subject to Uncertainties",
    info: "Adaptive sliding mode guidance for USVs under uncertainties",
  },
  {
    src: "/research/4-rp-image.webp",
    alt: "Adaptive Integral Terminal Sliding Mode Control for an Unmanned Surface Vehicle Against External Disturbances",
    info: "Integral terminal sliding mode control for USVs facing disturbances",
  },
  {
    src: "/research/5-rp-image.webp",
    alt: "A Real-Time NMPC Guidance Law and Robust Control for an Autonomous Surface Vehicle",
    info: "Real-time NMPC guidance and robust control for ASVs",
  },
  {
    src: "/research/6-rp-image.webp",
    alt: "Robust Visual Tracking Control Based on Adaptive Sliding Mode Strategy: Quadrotor UAV - Catamaran USV Heterogeneous System",
    info: "Visual tracking control for UAV-USV systems using adaptive sliding mode",
  },
  {
    src: "/research/7-rp-image.webp",
    alt: "Control of an Unmanned Surface Vehicle Based on Adaptive Dynamic Programming and Deep Reinforcement Learning",
    info: "USV control via ADP and deep reinforcement learning",
  },
  {
    src: "/research/8-rp-image.webp",
    alt: "USV Path-Following Control Based On Deep Reinforcement Learning and Adaptive Control",
    info: "Path-following control for USVs using deep reinforcement learning",
  },
{
    src: "/research/9-rp-image.webp",
    alt: "A 3D Vision Based Obstacle Avoidance Methodology for Unmanned Surface Vehicles",
    info: "3D vision-based obstacle avoidance for USVs",
  },
  {
    src: "/research/10-rp-image.webp",
    alt: "Control of a Double Thruster Twin-Hull Unmanned Surface Vehicle: Experimental Results",
    info: "Control experiments on twin-hull USVs with double thrusters",
  },
  {
    src: "/research/11-rp-image.webp",
    alt: "Modeling, identification and control of an unmanned surface vehicle",
    info: "Modeling and control strategies for USVs",
  },
  {
    src: "/research/12-rp-image.webp",
    alt: "Data Augmentation in Deep Learning-Based Obstacle Detection System for Autonomous Navigation on Aquatic Surfaces",
    info: "Enhancing aquatic obstacle detection with data augmentation",
  },
];


export const images_awards = [
  { src: "/drone_award.png", alt: "Special Award de Drone Award de $1,000 dólares (2017)", info: "Special Award de Drone Award de $1,000 dólares (2017)" },
  { src: "/engineer_integrity.png", alt: "Special Award de Engineering Integrity de $500 dólares (2018)", info: "Special Award de Engineering Integrity de $500 dólares (2018)" },
  { src: "/roboboat.jpg", alt: "Robonation:  En esta competencia se obtuvo el 5to lugar en la competencia y se recibió $1,500 dólares por el desempeño (2020)", info: "Robonation:  En esta competencia se obtuvo el 5to lugar en la competencia y se recibió $1,500 dólares por el desempeño (2020)" },
  { src: "/roboboat.jpg", alt: "RoboBoat 2020: Por primera vez, VantTec obtuvó el 1er lugar en la competencia con la recepción, así como también en el diseño de reporte técnico, video de introducción, página web y la categoría Testing on the Horizon ", info: "RoboBoat 2020: Por primera vez, VantTec obtuvó el 1er lugar en la competencia con la recepción, así como también en el diseño de reporte técnico, video de introducción, página web y la categoría Testing on the Horizon" },
  { src: "/premio_rg.png", alt: "Ganador en la cartegoría de alumnos de profesional al presentar seis papers sobre temas de control, visión 3D y detección de obstáculos en la Ceremonia de Premiación al Premio Rómulo Garza 2020 ", info: "Ganador en la cartegoría de alumnos de profesional al presentar seis papers sobre temas de control, visión 3D y detección de obstáculos en la Ceremonia de Premiación al Premio Rómulo Garza 2020 " },
  { src: "/roboboat.jpg", alt: "RoboBoat 2024: Se obtuvo el Special Award de Persistence Award de $250 dólares por parte de RoboNation", info: "RoboBoat 2024: Se obtuvo el Special Award de Persistence Award de $250 dólares por parte de RoboNation" },
  { src: "/xignux.png", alt: "Xignux challenge 2024: VantTec tuvo el honor de ser finalistas en el reto de 24 horas de Xignux llamada Xignux Challenge", info: "Xignux challenge 2024: VantTec tuvo el honor de ser finalistas en el reto de 24 horas de Xignux llamada Xignux Challenge" },

  
];