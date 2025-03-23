import project1 from "../assets/projects/formula_project.jpeg";
import project2 from "../assets/projects/project-3.jpg";
import project3 from "../assets/projects/e-commers.jpeg";
import project4 from "../assets/projects/logo.png";
import { link } from "framer-motion/client";


export const HERO_CONTENT = `I am 30 years old and I came to live and work in Germany in 2020. I started to work at the waterski cable in Schloss Dankern until the end of 2023. I realized that, although my passion for sports is strong, my affinity for computer technologies and creative processes of solving coding problems has become stronger. I do find a good balance in being a representative for Slovakia in waterskiing competitions all over the world, but I realized that the work with technologies such as Javascript, React, Node.JS and MongoDB bring me a lot of joy. So, I pursued that path to become a full stack developer and successfully graduated from the Digital Career Institute in March 2025.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable full-stack developer with a passion for building efficient and user-friendly web applications. I recently completed my web development course at DCI, where I gained hands-on experience with technologies like HTML, CSS, React, Next.js, Node.js, and MongoDB. My journey into coding started with a deep curiosity about how things work, and now I’m excited to apply my skills in real-world projects. I thrive in collaborative environments and enjoy tackling complex challenges to create high-quality solutions.

Outside of coding, I love staying active. I’m passionate about sports like waterskiing, skiing, volleyball, and gaming. I also enjoy taking care of my pets, including a dog, a horse, and four cats.

`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Student at Digital Career Institute",
    company: "Digital Career Institute",
    description: `Stydying web development at Digital Career Institute. Learning front-end and back-end technologies like React, Node.js, and MongoDB. Building projects and collaborating with peers to develop real-world applications.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Operator and coach at the waterski cable in Schloss Dankern",
    company: "Ferienzentrum Schloss Dankern GmbH & Co. KG",
    description: `Operated the waterski cable and provided coaching to guests of all ages and skill levels. Ensured the safety of guests and maintained equipment. Organized events and competitions to promote the sport of waterskiing.`,
    technologies: ["waterskiing", "coaching", "event planning"],
  },
  {
    year: "2018 - 2022",
    role: "Operator and coach at the waterski cable in Kosice ",
    company: "Trixen Cable Park",
    description: `Operated the waterski cable and provided coaching to guests of all ages and skill levels. Ensured the safety of guests and maintained equipment. Organized events and competitions to promote the sport of waterskiing.`,
    technologies: ["waterskiing", "coaching", "event planning"],
  },
  {
    year: "2018 - 2022",
    role: "Carpenter",
    company: "Midaw-Wolf",
    description: `Worked as a carpenter, specializing in the construction of custom furniture, cabinetry, floors and windows. Collaborated with clients to design and build unique pieces that met their needs and preferences. Utilized a variety of tools and techniques to create high-quality products. This job was part-time during winter to help my family business.`,
    technologies: ["carpentry", "furniture design", "woodworking"],
  },
];

export const PROJECTS = [
  {
    title: "Upcoming project Formula 1 2.0",
    image: project1,
    description:
      "A fully functional Formula 1 website with all the information you need to know about Formula 1 from the past, present and future.",
      
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
      link: "https://github.com/xKrompo/Portfolio",
    technologies: ["HTML", "CSS", "Tailwind", "React"],
  },
  {
    title: "E-commerce Platform",
    image: project3,
    description:
      "A fully functional website with features like product listing, shopping cart, and user authentication. This website I designed as part of a collaborated task during the DCI course.",
      link: "https://github.com/xKrompo/ecommerce_project",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "web-wizards-recipe-website",
    image: project4,
    description:
      "A recipe website that allows users to search for recipes, view details, and save their favorite recipes.This was a group project in the beginning of my studies at DCI.",
      link: "https://github.com/xKrompo/web-wizards-recipe-website",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Vielfak 6,Kirchwalsede 27386,Germany ",
  phoneNo: "+4917684709041 ",
  email: "mikulaswolg@gmail.com",
};
