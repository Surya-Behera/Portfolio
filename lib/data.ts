import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
 import liveprep from "@/public/liveprep.jpg";
import chatbot from "@/public/chatbot.jpeg";
import stayeazee from "@/public/stayeasy.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Associate Software Developer",
    location: "Involead, Bhubaneswar, India",
    description:
      "I'm now a full-stack developer working in INVOLEAD,Bhubaneswar. My stack includes React, Next.js, TypeScript, Tailwind,Java,Springboot,MySQL and MongoDB.",
    icon: React.createElement(FaReact),
    date: "July 2024 - present",
  },
  {
    title: "Intern Software Developer",
    location: "Involead, Bhubaneswar, India",
    description:
      "I worked as a front-end developer. My stack includes React, Next.js, TypeScript, Tailwind,Java,Springboot,MySQL and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - July 2024",
  }

] as const;


export const projectsData = [
  {
    title: "StayEazee",
    description:
    "This full-stack web application allows house owners to register their properties, while tenants can search and find the most suitable rooms available."
,
    tags: ["Next.js", "MySQL", "Tailwind", "Springboot"],
    imageUrl:stayeazee,
  },
  {
    title: "LIVE_prep AI interviewer (Voice interviewer)",
    description:
      "A React-based web application which allows students to practice for interviews with real-time questions.",
    tags: ["React", "TypeScript", "MongoDB", "Tailwind"],
    imageUrl: liveprep,
  },
  {
    title: "CHAT BOT",
    description:
      "A website for an AI chatbot using Llama-2b model, serving as a virtual assistant.",
    tags: ["React", "SQL", "Tailwind","Python","Framer"],
    imageUrl: chatbot,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Java",
  "Springboot",
  "MySQL",
  "Python",
  "Framer Motion",
] as const;
