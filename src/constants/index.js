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

const testimonials = [
  {
    id: 1,
    name: "Juanito Vargas",
    role: "Project Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus ac diam viverra volutpat. Sed id massa id neque facilisis efficitur.",
    img: juanito,
  },
  {
    id: 2,
    name: "Maria Sánchez",
    role: "Product Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus ac diam viverra volutpat. Sed id massa id neque facilisis efficitur.",
    img: maria,
  },
  {
    id: 3,
    name: "Pedro Pérez",
    role: "UI/UX Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus ac diam viverra volutpat. Sed id massa id neque facilisis efficitur.",
    img: pedro,
  },
  {
    id: 4,
    name: "Ana García",
    role: "Web Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus ac diam viverra volutpat. Sed id massa id neque facilisis efficitur.",
    img: ana,
  }
]

export { cardsData, testimonials };