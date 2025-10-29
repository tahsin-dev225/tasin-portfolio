"use client";
// import { RefreshCcwDot } from "lucide-react";
// import SkillsGrid from "./SkillGrid";
// import { EducationSection } from "./Education";
// import FallingText from "../AnimateComponent/AnimatedFallingText";
// import Typewriter from "@/cuicui/other/text-animation/typewritter/typewritter";
// import { useEffect, useState } from "react";

// export default function JourneySection() {
//   const [refresh, setRefresh] = useState(false);

//   useEffect(() => {
//   }, [refresh]);

//   return (
//     <section id="skills" className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1.5 sm:p-6 mt-28  text-white rounded-2xl">
//       {/* My Journey */}
//       <div className="col-span-2 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300 lg:col-span-1 shadow-md shadow-sky-200/10 h-full bg-gradient-to-br from-[#1a0336] items-center md:items-start to-[#010316] p-6 rounded-xl flex flex-col justify-between">
//         <div>
//           <h2 className="smm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
//             My Skills & Education.
//           </h2>
//           {/* <p className="text-[10px] xsm:text-[12px] smm:text-[16px] text-neutral-400">Skills & Education</p> */}
//         </div>
//         {/* <div className=" sm:mt-6">
//           <p className="smm:text-3xl font-bold">4,825</p>
//           <p className="text-neutral-400 text-[10px] smm:text-sm">Project Views last year</p>
//           <button className="mt-4 hidden px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-sm">
//             + Generate
//           </button>
//         </div> */}
//         <p className="mt-3 text-sm smm:text-base text-neutral-300 leading-relaxed">
//   Today, I continue to improve my skills, explore new frameworks, and challenge
//   myself with projects that push the limits of what I can create.
// </p>
//       </div>

//       {/* Skills */}
//       <div className=" col-span-2 row-span-2 shadow-md shadow-sky-200/10  hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300  bg-gradient-to-br from-[#1a0336]  to-[#010316] p-6 rounded-xl">
//         <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-500/20 to-[#108efd45] p-2 py-5 rounded-lg">
//           MERN Stack <br /> Developer
//         </h3>
//         <SkillsGrid/>
//       </div>

//       <div className="col-span-2 lg:col-span-1 bg-dashboard-code-bg min-h-[320px] xsm:min-h-[250px] smm::min-h-[250px] border border-sky-400/1  hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300  shadow shadow-sky-950/30 rounded-lg p-4 font-mono text-sm">
//         <div className="text-tech-react mb-1">{"import React from 'react';"}</div>
//         <div className="text-tech-js mb-1">{"const Dashboard = () = > {"}</div>
//         <div className="text-dashboard-text-secondary mb-1">  return (</div>
//         <div className="text-tech-html ml-4 mb-1">{'<div className= "dashboard" >'}</div>
//         <div className="ml-6">
//           <Typewriter
//             text={[
//               "< div className= 'w-full' >",
//               "< Link href = { '/' } >  .",
//               "product?.map((data) =>( <>",
//             ]}
//             speed={5}
//             waitTime={3500}
//             deleteSpeed={10}
//             cursorChar="|"
//             className="text-gray-200 "
//           />
//           <Typewriter
//             text={[
//               "{children}",
//               " Github___",
//               "{data._id}",
//             ]}
//             speed={35}
//             waitTime={3500}
//             deleteSpeed={80}
//             cursorChar="|"
//             className="text-gray-200 ml-5"
//           /> <br />
//           <Typewriter
//             text={[
//               "</div >",
//               "</Link>",
//               "</div>)",
//             ]}
//             speed={35}
//             waitTime={3500}
//             deleteSpeed={80}
//             cursorChar="|"
//             className="text-gray-200 "
//           />
//         </div>
//         <div className="text-tech-html ml-4 mb-1">&lt;/div&gt;</div>
//         <div className="text-dashboard-text-secondary">  );</div>
//         <div className="text-tech-js">&#125;</div>
//       </div>

//       {/* Codebase / Focus */}
//       <div className="col-span-2 lg:col-span-1 min-h-full shadow-md shadow-sky-200/10  hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300  bg-gradient-to-br from-[#1a0336]  to-[#010316] p-6 rounded-xl flex flex-col justify-between">
//         <div>
//           <h4 className="font-semibold mb-4">Frontend Focus</h4>
//           <ul className="space-y-2 text-sm">
//             <li>⚡ CSS</li>
//             <li>⚡ JavaScript</li>
//             <li>⚡ Tailwind CSS</li>
//           </ul>
//         </div>
//         <div className="mt-6">
//           <p className="text-neutral-400 text-xs">Collaborators</p>
//           <p className="text-sm">2+ Projects</p>
//         </div>
//       </div>

//       <div className="col-span-2 hidden md:block w-full lg:row-span-2 lg:col-span-1 h-full rounded-xl shadow-md shadow-sky-200/10 bg-gradient-to-br from-[#1a0336]  to-[#010316]">

//         <FallingText
//           text={` "Fire-base" "Redux"   "React-Router"     "Zod"    "JSON"   "Axios"    "Material-Ui"    "Github"   "Cors"  `}
//           highlightWords={['"Fire-base"', '"Bits"', '"Axios"', '"Redux"', '"Material-Ui"']}
//           highlightClass="falling-pill"
//           trigger="hover"
//           backgroundColor="transparent"
//           wireframes={false}
//           gravity={0.23}
//           fontSize="1.7rem"
//           mouseConstraintStiffness={0.3}
//         />
//       </div>

//       {/* Education */}
//       <div className="col-span-2 shadow-200/30 w-full shadow shadow-sky-950/30  hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300  bg-gradient-to-br  p-6  rounded-xl">
//         <EducationSection/>
//       </div>

//       <div className="col-span-2 font-sans lg:col-span-1 shadow-md shadow-sky-200/10  hover:-translate-y-1 hover:shadow-2xl
//        hover:shadow-sky-900/5 duration-300  bg-gradient-to-br from-[#1a0336]  to-[#010316] p-6 rounded-xl flex flex-col justify-between">
//         <div>
//           <h4 className="font-semibold  mb-4">Strengths</h4>
//           <ul className="list-disc ml-2.5 tracking-wider font-extralight text-gray-300 text-[14px]">
//             <li className="my-4">Building responsive & scalable websites.</li>
//             <li className="my-4">Writing clean & reusable code.</li>
//             <li className="my-4">Real-time data fetching & API integration.</li>
//             <li className="my-4">Debugging & problem-solving skills.</li>
//           </ul>
//         </div>
//       </div>

//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { Code2, Server, Database, Wrench, Sparkles } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { GoGear } from "react-icons/go";

interface SkillCategory {
  title: string;
  id: number;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    id: 0,
    items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    id: 1,
    items: ["Node.js", "Express.js", "JWT", "API Design"],
  },
  { title: "Database", id: 2, items: ["MongoDB", "Mongoose", "Aggregation"] },
  {
    title: "Tools",
    id: 3,
    items: ["Git", "GitHub", "Postman", "Vercel", "Figma"],
  },
  {
    title: "Core Strengths",
    id: 4,
    items: [
      "Clean Architecture",
      "Performance Optimization",
      "Responsive Design",
      "Problem Solving",
    ],
  },
  {
    title: "Other Expertise",
    id: 5,
    items: [
      "RESTful APIs",
      "Authentication Systems",
      "State Management",
      "Error Handling",
    ],
  },
];

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  "Core Strengths": Sparkles,
  "Other Expertise": GoGear,
};

const SkillsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentHover, setCurrentHover] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      onMouseLeave={() => {
        setCurrentHover(0);
      }}
      ref={sectionRef}
      className=" bg-gradient-to-br  relative overflow-hidden py-2 md:py-10 xl:py-20 px-4"
    >
      <div className=" mx-auto relative z-10">
        <SectionHeader
          title="Skills & Tect Stack"
          subtitle="A comprehensive toolkit for building modern, scalable web applications"
        />

        <div className="grid grid-cols-1 smm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => {
            const Icon =
              categoryIcons[category.title as keyof typeof categoryIcons];
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={category.title}
                className={`group skill-card ${isVisible ? "visible" : ""}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  onMouseEnter={() => {
                    setCurrentHover(index);
                  }}
                  className={`relative h-full bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border  ${
                    currentHover === index
                      ? "border-blue-500/50"
                      : "border-slate-800"
                  } transition-all duration-500 overflow-hidden`}
                >
                  <div
                    className={`absolute ${
                      currentHover === index ? "opacity-100" : ""
                    } inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0  group-hover: transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`absolute ${
                      currentHover === index ? "opacity-20" : ""
                    } -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover: blur-xl transition-opacity duration-500`}
                  >
                    {" "}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-500/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-blue-400/70" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm bg-slate-800/80 text-slate-300 rounded-lg border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 hover:text-blue-400 hover:scale-105 transition-all duration-300 cursor-default"
                          style={{
                            animationDelay: `${
                              index * 150 + skillIndex * 50
                            }ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm">
              Always learning, always growing
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float-delayed"></div>
    </div>
  );
};

export default SkillsSection;
