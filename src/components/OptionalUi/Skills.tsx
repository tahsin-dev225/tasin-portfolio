"use client";
import { RefreshCcwDot } from "lucide-react";
import SkillsGrid from "./SkillGrid";
import { EducationSection } from "./Education";
import FallingText from "../AnimateComponent/AnimatedFallingText";
import Typewriter from "@/cuicui/other/text-animation/typewritter/typewritter";
import { useEffect, useState } from "react";

export default function JourneySection() {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
  }, [refresh]);


  return (
    <section id="skills" className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1.5 sm:p-6 mt-28  text-white rounded-2xl">
      {/* My Journey */}
      <div className="col-span-2 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300 lg:col-span-1 shadow-md shadow-sky-200/10 h-full bg-gradient-to-br from-[#1a0336] items-center md:items-start to-[#010316] p-6 rounded-xl flex flex-col justify-between">
        <div>
          <h2 className="smm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            My Skills & Education.
          </h2>
          {/* <p className="text-[10px] xsm:text-[12px] smm:text-[16px] text-neutral-400">Skills & Education</p> */}
        </div>
        {/* <div className=" sm:mt-6">
          <p className="smm:text-3xl font-bold">4,825</p>
          <p className="text-neutral-400 text-[10px] smm:text-sm">Project Views last year</p>
          <button className="mt-4 hidden px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-sm">
            + Generate
          </button>
        </div> */}
        <p className="mt-3 text-sm smm:text-base text-neutral-300 leading-relaxed">
  Today, I continue to improve my skills, explore new frameworks, and challenge
  myself with projects that push the limits of what I can create.
</p>
      </div>

      {/* Skills */}
      <div className=" col-span-2 row-span-2 shadow-md shadow-sky-200/10  hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300  bg-gradient-to-br from-[#1a0336]  to-[#010316] p-6 rounded-xl">
        <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-500/20 to-[#108efd45] p-2 py-5 rounded-lg">
          MERN Stack <br /> Developer
        </h3>
        <SkillsGrid/>
      </div>

      <div className="col-span-2 lg:col-span-1 bg-dashboard-code-bg min-h-[320px] xsm:min-h-[250px] smm::min-h-[250px] border border-sky-400/1  hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300  shadow shadow-sky-950/30 rounded-lg p-4 font-mono text-sm">
        <div className="text-tech-react mb-1">{"import React from 'react';"}</div>
        <div className="text-tech-js mb-1">{"const Dashboard = () = > {"}</div>
        <div className="text-dashboard-text-secondary mb-1">  return (</div>
        <div className="text-tech-html ml-4 mb-1">{'<div className= "dashboard" >'}</div>
        <div className="ml-6">
          <Typewriter
            text={[
              "< div className= 'w-full' >",
              "< Link href = { '/' } >  .",
              "product?.map((data) =>( <>",
            ]}
            speed={5}
            waitTime={3500}
            deleteSpeed={10}
            cursorChar="|"
            className="text-gray-200 "
          />
          <Typewriter
            text={[
              "{children}",
              " Github___",
              "{data._id}",
            ]}
            speed={35}
            waitTime={3500}
            deleteSpeed={80}
            cursorChar="|"
            className="text-gray-200 ml-5"
          /> <br />
          <Typewriter
            text={[
              "</div >",
              "</Link>",
              "</div>)",
            ]}
            speed={35}
            waitTime={3500}
            deleteSpeed={80}
            cursorChar="|"
            className="text-gray-200 "
          />
        </div>
        <div className="text-tech-html ml-4 mb-1">&lt;/div&gt;</div>
        <div className="text-dashboard-text-secondary">  );</div>
        <div className="text-tech-js">&#125;</div>
      </div>

      {/* Codebase / Focus */}
      <div className="col-span-2 lg:col-span-1 min-h-full shadow-md shadow-sky-200/10  hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300  bg-gradient-to-br from-[#1a0336]  to-[#010316] p-6 rounded-xl flex flex-col justify-between">
        <div>
          <h4 className="font-semibold mb-4">Frontend Focus</h4>
          <ul className="space-y-2 text-sm">
            <li>⚡ CSS</li>
            <li>⚡ JavaScript</li>
            <li>⚡ Tailwind CSS</li>
          </ul>
        </div>
        <div className="mt-6">
          <p className="text-neutral-400 text-xs">Collaborators</p>
          <p className="text-sm">2+ Projects</p>
        </div>
      </div>

      <div className="col-span-2 hidden md:block w-full lg:row-span-2 lg:col-span-1 h-full rounded-xl shadow-md shadow-sky-200/10 bg-gradient-to-br from-[#1a0336]  to-[#010316]">
      
        <FallingText
          text={` "Fire-base" "Redux"   "React-Router"     "Zod"    "JSON"   "Axios"    "Material-Ui"    "Github"   "Cors"  `}
          highlightWords={['"Fire-base"', '"Bits"', '"Axios"', '"Redux"', '"Material-Ui"']}
          highlightClass="falling-pill"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.23} 
          fontSize="1.7rem" 
          mouseConstraintStiffness={0.3}
        />
      </div>


      {/* Education */}
      <div className="col-span-2 shadow-200/30 w-full shadow shadow-sky-950/30  hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/5 duration-300  bg-gradient-to-br  p-6  rounded-xl">
        <EducationSection/>
      </div>
      
      <div className="col-span-2 font-sans lg:col-span-1 shadow-md shadow-sky-200/10  hover:-translate-y-1 hover:shadow-2xl
       hover:shadow-sky-900/5 duration-300  bg-gradient-to-br from-[#1a0336]  to-[#010316] p-6 rounded-xl flex flex-col justify-between">
        <div>
          <h4 className="font-semibold  mb-4">Strengths</h4>
          <ul className="list-disc ml-2.5 tracking-wider font-extralight text-gray-300 text-[14px]">
            <li className="my-4">Building responsive & scalable websites.</li>
            <li className="my-4">Writing clean & reusable code.</li>
            <li className="my-4">Real-time data fetching & API integration.</li>
            <li className="my-4">Debugging & problem-solving skills.</li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}