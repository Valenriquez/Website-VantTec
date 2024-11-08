import {
  sdv,
  drone,
  boat,
  submarine,
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
    desc: "Project description",
  },
  {
    img: drone,
    title: "Drone",
    desc: "Project description",
  },
  {
    img: boat,
    title: "Boat",
    desc: "Project description",
  },
  {
    img: submarine,
    title: "Submarine",
    desc: "Project description",
  },
]

export { cardsData };