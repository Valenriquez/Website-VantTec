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
    canvasType: 'sdvs',
  },
  {
    img: drone,
    title: "Drone",
    desc: "Its main focus is on making solutions based on autonomous dones, such as package delivery, as well as participation in competitions, such as the Mexican Robotics Tournament.",
    canvasType: 'boats',
  },
  {
    img: boat,
    title: "Boat",
    desc: "Develops an autonomous boat for RoboBoat competitions, focusing on control, navigation, and object recognition.",
    canvasType: 'drones',
  },
  {
    img: submarine,
    title: "Submarine",
    desc: "Creates an autonomous submarine for RoboSub, tackling underwater tasks in global competitions.",
    canvasType:'submarines',
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


export const accordion_info_boat = [
  {
    title: "Xignux Challenge 2024",
    content: `From May 7-8, 2024, VantTec was honored to be a finalist in the Xignux Challenge, a 24-hour challenge aimed at identifying socially responsible leaders to develop solutions for the 2030 Agenda. VantTec participated with their Autonomous Water Administrator System (AWAS) project. AWAS is a data-driven initiative involving an autonomous boat with sensors for water body monitoring.
    
    Originally developed by students in the USV project, AWAS integrates knowledge from competitive prototypes and takes it further by mapping water quality in real-time across different areas. The goal is to become a national leader in water monitoring and preservation technologies in Mexico.`
  },
  {
    title: "RoboBoat 2024",
    content: "From February 5-11, 2024, at Nathan Benderson Park in Sarasota, Florida, the team returned with their V-TEC-S-III model. After a week of hard work, they made it to the finals and won the Persistence Award of $250 from RoboNation. This experience motivated them to start the V-TEC-S-IV project for future RoboBoat competitions and external applications." 
  },
  {
    title: "Rómulo Garza Award 2020",
    content: `In 2021, Tec de Monterrey and Xignux organized the Rómulo Garza Award Ceremony for 2020, their highest recognition for research and innovation. VantTec won the award in the professional students category for publishing six papers on control, 3D vision, and obstacle detection.`
  },
  {
    title: "RoboBoat 2020",
    content: `In 2020, RoboBoat was held online due to the COVID-19 pandemic. Despite this, the team continued their efforts virtually, showcasing their V-TEC-S-III work. VantTec won 1st place, receiving $3,000, and also earned $1,500 for their technical report, intro video, and website design. Additionally, they received a $1,000 special award for the "Testing on the Horizon" category.`
  },
  {
    title: "RoboBoat 2019",
    content: `From June 17-23, 2019, the team participated in RoboNation's annual challenges with their successful engineering product, V-TEC-S-III. They secured 5th place and earned $1,500 for their performance.`
  },
  {
    title: "RoboBoat 2018",
    content: `From June 18-24, 2018, the team participated again with a new iteration of the vehicle: V-TEC-S-III. With support from sponsors like Uber ATG, Google, and NVIDIA, they won the $500 Engineering Integrity Special Award in the competition.`
  },
  {
    title: "RoboBoat 2017",
    content: `From July 20-25, 2017, the team participated for the first time in RoboNation's competition at Reed Canal Park, Florida. They competed with the first USV iteration, MTM Definity First, and won the $1,000 Drone Award for landing an autonomous drone on the autonomous boat.`
  },
  {
    title: "USV | Unmanned Surface Vehicle",
    content: `The Autonomous Surface Vehicle (ASV or USV) project started in 2017 as the first initiative by the VantTec student team. It aimed to accelerate Mexican technology development and provide younger team members with practical experience. The team designed an autonomous boat to compete in the annual RoboBoat competition, advancing research on autonomous vehicles with six published papers and presentations at international conferences.`
  },
];


export const home_aboutus_images = [
  {
    src: "/team/roboboat.jpg",
    alt: "Roboboat 2024",
  },
  {
    src: "public/team/group.jpg",
    alt: "Building Connections That Last a Lifetime"
  },
  {
    src: "public/team/competencia.jpg",
    alt: "Representing Mexico"
  }
]

export const home_about_us_companies_images = [
  {
    src: "/companies_logo/Google_2015_logo.svg.png"
  },
  {
    src: "/companies_logo/meta_logo.png"
  },
  {
    src: "/companies_logo/microsoft-logo.png"
  },
  {
    src: "/companies_logo/HRT_Primary_Logo_-_Full_Color.png"
  },
  {
    src: "/companies_logo/bloomberg_logo.png"
  },
  {
    src: "/companies_logo/Amazon_logo.svg.webp"
  },
  {
    src: "/companies_logo/stanford-logo.png"
  },
  {
    src: "/companies_logo/mit.png"
  },
  {
    src: "/companies_logo/carnegie_mellon_university_logo-freelogovectors.net_.png"
  },
]

export const projects_blog_boat=[
  {
    date: "Dec 2024",
    info: "Holiday Campaign",
    image: "/boat/girls_boat.jpg",
  },
  {
    date: "Jan 2025",
    info: "New Year Launch",
    image: "/boat/firends_boat.jpg",
  },
  {
    date: "Spring 2025",
    info: "Spring Collection",
    image: "/boat/testing_boat.jpg",
  },
]


export const awards_us_images = [
  {
    src: "/team/competition2.jpg",
    alt: "Roboboat 2024",
  },
  {
    src: "public/team/testing_boat.jpg",
    alt: "Making Friends"
  },
  {
    src: "public/team/boat.jpg",
    alt: "Representing Mexico on Robonation"
  }
]


export const projects_awards = [
  {
    name: "UAV Drone",
    prizes: [
      "Special Award de Drone Award",
    ]
  },
  {
    name: "USV Boat",
    prizes: [
      "Robonation (2019): 5th place, awarded $1,500 for performance",
      "RoboBoat 2020: 1st place, awarded $3,000. Also received $1,500 each for technical report, intro video, and website design, plus a $1,000 special prize for Testing on the Horizon.",
      "RoboBoat 2024: Received the $250 Persistence Award from RoboNation."
    ]
  }
];


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
  { src: "/xignux.png", alt: "Xignux challenge 2024: VantTec tuvo el honor de ser finalistas en el reto de 24 horas de Xignux llamada Xignux Challenge", info: "Xignux challenge 2024: VantTec tuvo el honor de ser finalistas en el reto de 24 horas de Xignux llamada Xignux Challenge" }

  
];