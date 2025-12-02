import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPython,
  SiDjango,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";

export const TECH_STACK = [
  // ----- FRONTEND -----
  { name: "React", icon: FaReact, color: "#61DAFB", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "frontend" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "frontend" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },

  // ----- BACKEND -----
  { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "backend" },
  { name: "Express.js", icon: SiExpress, color: "#000000", category: "backend" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "backend" },
  { name: "Django", icon: SiDjango, color: "#092E20", category: "backend" },

  // ----- DATABASE -----
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "database" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "database" },

  // ----- TOOLS / OTHER -----
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "tools" },
  { name: "GitHub", icon: FaGithub, color: "#181717", category: "tools" },
  { name: "C++", icon: TbBrandCpp, color: "#00599C", category: "other" },
];
