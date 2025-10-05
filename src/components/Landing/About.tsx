"use client";
import Image from "next/image";
import SkillsSection from "../OptionalUi/Skills";
import SplitText from "../AnimateComponent/SpliteText";

export default function AboutMe() {
  return (
    <section id="about" className="relative bg-gradient-to-t font- from-gray-950/60 to-gray-900/20 my-14 text-gray-200 pt-20 p-4 ">
      <div className="max-w-6x mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="relative group mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/5 to-indigo-600/5 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
          <Image
            src="/img/aboutme.png"
            alt="Tasin Ahmed"
            width={500}
            height={500}
            className="relative mx-aut py-1.5 rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full">
          <h2 className="text-4xl hidden font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>

          <SplitText
            text="About Me"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            className="text-xl md:text-2xl lg:text-3xl font-bold"
          />



          


          <p className="text-lg font- leading-relaxed text-gray-300 mb-6">
            Hi, I’m <span className="text-purple-400 uppercase tracking-wider font-semibold">-Tasin Ahmed</span>, 
             a passionate Full-Stack Web Developer with expertise in building 
            modern web applications using <span className="text-indigo-400">React, Next.js, Node.js, and MongoDB</span>.  
            I love crafting smooth user experiences and scalable backend systems.
          </p>
          <p className="text-lg font- leading-relaxed text-gray-400 mb-6">
            When I’m not coding, I enjoy exploring new technologies, learning advanced 
            design patterns, and contributing to open-source projects. My goal is to 
            create impactful digital solutions that make life easier for people.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
      {/* <BentoSkills/> */}
      <SkillsSection/>
    </section>
  );
}
